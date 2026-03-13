import React, { useEffect, useRef } from 'react';

const VoidShader: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl');
    if (!gl) return;

    const vsSource = `
      attribute vec4 aVertexPosition;
      void main() {
        gl_Position = aVertexPosition;
      }
    `;

    const fsSource = `
      precision mediump float;
      uniform float uTime;
      uniform vec2 uResolution;
      uniform float uScroll;

      float random (in vec2 st) {
          return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
      }

      float noise (in vec2 st) {
          vec2 i = floor(st);
          vec2 f = fract(st);
          float a = random(i);
          float b = random(i + vec2(1.0, 0.0));
          float c = random(i + vec2(0.0, 1.0));
          float d = random(i + vec2(1.0, 1.0));
          vec2 u = f * f * (3.0 - 2.0 * f);
          return mix(a, b, u.x) + (c - a)* u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
      }

      void main() {
          vec2 st = gl_FragCoord.xy/uResolution.xy;
          st.y += uScroll * 0.1;
          
          vec3 color = vec3(0.96, 0.96, 0.98); // Light Architectural Base
          
          float n = noise(st * 2.0 + uTime * 0.05);
          color -= vec3(0.03, 0.04, 0.05) * n; 
          
          gl_FragColor = vec4(color, 1.0);
      }
    `;

    const shaderProgram = gl.createProgram()!;
    const loadShader = (type: number, source: string) => {
      const shader = gl.createShader(type)!;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      return shader;
    };

    gl.attachShader(shaderProgram, loadShader(gl.VERTEX_SHADER, vsSource));
    gl.attachShader(shaderProgram, loadShader(gl.FRAGMENT_SHADER, fsSource));
    gl.linkProgram(shaderProgram);

    const programInfo = {
      program: shaderProgram,
      attribLocations: { vertexPosition: gl.getAttribLocation(shaderProgram, 'aVertexPosition') },
      uniformLocations: {
        uTime: gl.getUniformLocation(shaderProgram, 'uTime'),
        uResolution: gl.getUniformLocation(shaderProgram, 'uResolution'),
        uScroll: gl.getUniformLocation(shaderProgram, 'uScroll'),
      },
    };

    const buffers = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffers);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([1, 1, -1, 1, 1, -1, -1, -1]), gl.STATIC_DRAW);

    let animationFrameId: number;
    const render = (now: number) => {
      if (!canvas) return;
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
      gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
      gl.useProgram(programInfo.program);
      gl.uniform1f(programInfo.uniformLocations.uTime, now * 0.001);
      gl.uniform2f(programInfo.uniformLocations.uResolution, gl.canvas.width, gl.canvas.height);
      gl.uniform1f(programInfo.uniformLocations.uScroll, window.scrollY / (document.body.scrollHeight || 1));
      gl.bindBuffer(gl.ARRAY_BUFFER, buffers);
      gl.vertexAttribPointer(programInfo.attribLocations.vertexPosition, 2, gl.FLOAT, false, 0, 0);
      gl.enableVertexAttribArray(programInfo.attribLocations.vertexPosition);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animationFrameId = requestAnimationFrame(render);
    };
    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas id="void-canvas" ref={canvasRef} />;
};

export default VoidShader;

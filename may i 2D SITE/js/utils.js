import * as THREE from "three";

// Texture cache for loadTexture function
const textureCache = new Map();

// Throttle function to limit frequency of event handler calls
export function throttle(func, limit) {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// Cubic easing function for smooth transitions
export function easeInOutCubic(x) {
  return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
}

// Load and cache textures
export async function loadTexture(loader, url) {
  if (!url) return Promise.reject(new Error("Texture URL is empty or invalid"));
  // Return cached texture if available
  if (textureCache.has(url)) {
    const cached = textureCache.get(url);
    if (cached instanceof Promise) return cached; // Return promise if still loading
    if (cached instanceof THREE.Texture) return Promise.resolve(cached); // Return texture if loaded
  }

  // Load texture and cache the promise
  const promise = new Promise((resolve, reject) => {
    loader.load(
      url,
      (texture) => {
        texture.colorSpace = THREE.SRGBColorSpace; // Correct color space for web images
        texture.minFilter = THREE.LinearFilter; // Good quality filtering
        texture.magFilter = THREE.LinearFilter;
        texture.needsUpdate = true; // Ensure texture updates GPU
        textureCache.set(url, texture); // Cache the loaded texture
        resolve(texture);
      },
      undefined, // onProgress callback (optional)
      (errorEvent) => {
        console.error(`Error loading texture: ${url}`, errorEvent);
        textureCache.delete(url); // Remove failed entry from cache
        reject(new Error(`Failed to load texture ${url}`));
      }
    );
  });
  textureCache.set(url, promise); // Cache the promise itself initially
  return promise;
}

// Display error message prominently
export function showError(message) {
  const loaderElement = document.getElementById("loader");
  if (loaderElement) {
    loaderElement.textContent = message;
    loaderElement.style.color = "red";
    loaderElement.style.display = "block";
  } else {
    // Fallback if loader element isn't found
    const errorDiv = document.createElement("div");
    errorDiv.style.cssText = `
      position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
      background: rgba(200, 0, 0, 0.8); color: white; padding: 20px;
      border-radius: 5px; z-index: 1000; text-align: center;
    `;
    errorDiv.textContent = message;
    document.body.appendChild(errorDiv);
  }
}

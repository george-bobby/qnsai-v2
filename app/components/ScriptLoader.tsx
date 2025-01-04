"use client";
import { useEffect } from "react";

const ScriptLoader: React.FC = () => {
  useEffect(() => {
    const scripts: string[] = [
      "assets/js/bootstrap.min.js",
      "assets/js/count-up.min.js",
      "assets/js/wow.min.js",
      "assets/js/tiny-slider.js",
      "assets/js/glightbox.min.js",
      "assets/js/imagesloaded.min.js",
      "assets/js/isotope.min.js",
      "assets/js/main.js",
      "assets/js/bootstrap.bundle.min.js",
      "assets/js/contact-form.js",
      "assets/js/play.js",
      "assets/js/space.js"
    ];

    const loadScript = (src: string) => {
      return new Promise<void>((resolve, reject) => {
        const script = document.createElement("script");
        script.src = src;
        script.defer = true; // Ensure scripts are loaded in order
        script.onload = () => {
          console.log(`${src} loaded successfully`);
          resolve();
        };
        script.onerror = () => {
          console.error(`Failed to load ${src}`);
          reject(new Error(`Failed to load script: ${src}`));
        };
        document.body.appendChild(script);
      });
    };

    const loadScripts = async () => {
      for (let i = 0; i < scripts.length; i++) {
        try {
          await loadScript(scripts[i]);
        } catch (error) {
          console.error(error);
        }
      }
    };

    loadScripts();

    return () => {
      // Cleanup: Remove the scripts when the component unmounts
      scripts.forEach((src) => {
        const script = document.querySelector(`script[src="${src}"]`);
        if (script) {
          document.body.removeChild(script);
        }
      });
    };
  }, []);

  return null; // No UI elements are returned
};

export default ScriptLoader;

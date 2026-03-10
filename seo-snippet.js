// Single-file SEO snippet (CONFIG + META_DATA + LD_DATA + runtime)

(function () {
  "use strict";


  const CONFIG = {
    baseUrlFallback: "https://www.janicefioreallthingsarepossible.com",
    googleSiteVerification: ""
  };

  // === DATA (from your previous meta-tags.js) ===
  const META_DATA = {"meta_tags_list":[{"page_url":"https://www.janicefioreallthingsarepossible.com/","title_tag":"Health and Wellness, Stress Relief | Brain Works Naturally","meta_description":"Holistic health and wellness coaching, Brain Gym, aromatherapy and more for stress relief, emotional healing and vitality. Virtual and in-person sessions available."},{"page_url":"https://www.janicefioreallthingsarepossible.com/about","title_tag":"Health and Wellness Coaching | Brain Works Naturally","meta_description":"Integrative health and wellness support for mind, body, and spirit. Learn how Brain Works Naturally helps reduce stress and support emotional healing and vitality."},{"page_url":"https://www.janicefioreallthingsarepossible.com/copy-of-aromatherapy-1","title_tag":"Aromatherapy, Emotional Healing | Janice Fiore","meta_description":"Professional aromatherapy services and essential oils to support emotional healing, stress relief and a healthier home. Explore holistic products with Janice Fiore."},{"page_url":"https://www.janicefioreallthingsarepossible.com/copy-of-brain-gym-r-101","title_tag":"Brain Gym, Aromatherapy AFT | Brain Works Naturally","meta_description":"Aroma Freedom Technique combines aromatherapy and mindset tools to release blocks, support emotional healing and boost motivation. Book an AFT session today."},{"page_url":"https://www.janicefioreallthingsarepossible.com/copy-of-class-descriptions","title_tag":"Brain Gym Classes, Stress Relief | Brain Works Naturally","meta_description":"Brain Gym classes and workshops to improve focus, learning and stress relief for all ages. Discover movement-based tools for better brain integration and wellness."},{"page_url":"https://www.janicefioreallthingsarepossible.com/copy-of-brain-gym-2","title_tag":"Brain Gym Training | Brain Works Naturally","meta_description":"Brain Gym courses for educators, therapists and parents to enhance learning, focus and emotional balance. Earn CEUs while supporting holistic brain wellness."},{"page_url":"https://www.janicefioreallthingsarepossible.com/facilitator-training","title_tag":"Brain Gym Facilitator Training | Janice Fiore","meta_description":"Brain Gym facilitator training and virtual classes for professionals seeking tools for cognitive, physical and emotional growth and stress relief strategies."},{"page_url":"https://www.janicefioreallthingsarepossible.com/all-services","title_tag":"Prana Reiki, Reflexology, Sound Healing | Janice Fiore","meta_description":"Explore Prana Reiki, reflexology, Biosonic sound healing, Bio Well energy, Brain Gym and more for emotional healing, health and wellness, and stress relief."},{"page_url":"https://www.janicefioreallthingsarepossible.com/copy-of-aromatherapy-2","title_tag":"Aromatherapy, Emotional Healing | Janice Fiore","meta_description":"Aromatherapy and essential oils for a healthier home, emotional healing and stress relief. Discover curated wellness products and holistic support with Janice Fiore."}],"keywords":["aromatherapy","brain gym","prana reiki","emotional healing","wellness coaching","reflexology","bio well energy","sound healing","health and wellness","stress relief"]};

  // === DATA (from your previous LD.js) ===
  const LD_DATA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.janicefioreallthingsarepossible.com/#organization",
  "name": "Brain Works Naturally",
  "url": "https://www.janicefioreallthingsarepossible.com/",
  "description": "Brain Works Naturally offers holistic support for mental, emotional, spiritual, and physical healing by focusing on the heart-brain-body connection. Through personalized coaching, Brain Gym classes, aromatherapy, and a range of complementary services—available virtually and in-person—it helps clients address stress, cravings, negativity, and supports relaxation, clarity, and overall well-being.",
  "logo": "https://static.wixstatic.com/media/6e65ed_7b26a174248a4448b09fb95eb6bcba25~mv2.png/v1/crop/x_20,y_0,w_561,h_124/fill/w_785,h_174,al_c,lg_1,q_85,enc_avif,quality_auto/23450184-dfe4-411d-8277-1bb3b1193583.png",
  "image": [
    "https://static.wixstatic.com/media/6e65ed_7b26a174248a4448b09fb95eb6bcba25~mv2.png/v1/crop/x_20,y_0,w_561,h_124/fill/w_785,h_174,al_c,lg_1,q_85,enc_avif,quality_auto/23450184-dfe4-411d-8277-1bb3b1193583.png",
    "https://static.wixstatic.com/media/93bdfe_617782c8271749bd9ff13661f53eb1a9~mv2.jpg/v1/crop/x_48,y_0,w_2008,h_2008/fill/w_135,h_135,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/jan%2520profile%2520pic_edited.jpg"
  ],
  "founder": {
    "@type": "Person",
    "name": "Janice Fiore",
    "image": "https://static.wixstatic.com/media/93bdfe_617782c8271749bd9ff13661f53eb1a9~mv2.jpg/v1/crop/x_48,y_0,w_2008,h_2008/fill/w_135,h_135,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/jan%2520profile%2520pic_edited.jpg",
    "description": "Holistic wellness practitioner and Brain Gym facilitator offering classes, workshops, and private sessions that integrate neuroscience insights with holistic technologies."
  },
  "sameAs": [],
  "offers": [
    {
      "@type": "Service",
      "name": "Holistic Wellness Consultation",
      "description": "Free 30-minute consultation to explore integrative wellness options such as Emotion Code, Brain Gym, Prana Reiki, BioCharger sessions, reflexology, infrared sauna, and other holistic tools.",
      "provider": {
        "@id": "https://www.janicefioreallthingsarepossible.com/#organization"
      }
    },
    {
      "@type": "Service",
      "name": "Brain Gym Classes & Workshops",
      "description": "Brain Gym classes and workshops including Brain Gym 101, Brain Gym 170 for special needs providers, Optimal Brain Organization, and Visioncircles to support learning, focus, and neurological integration.",
      "provider": {
        "@id": "https://www.janicefioreallthingsarepossible.com/#organization"
      }
    },
    {
      "@type": "Service",
      "name": "Aromatherapy & Aroma Freedom Technique (AFT)",
      "description": "Professional aromatherapy and Aroma Freedom Technique sessions using pure essential oils to support emotional release, positive mindset, and overall wellness.",
      "provider": {
        "@id": "https://www.janicefioreallthingsarepossible.com/#organization"
      }
    },
    {
      "@type": "Service",
      "name": "Integrative Holistic Services",
      "description": "In-person and virtual sessions including Emotion Code, Body Code, Belief Code, Brain Gym balance sessions, Prana Reiki, BioCharger NG, reflexology, Quantum Reflex Integration, BioSonic sound healing, infrared sauna, and other supportive technologies.",
      "provider": {
        "@id": "https://www.janicefioreallthingsarepossible.com/#organization"
      }
    }
  ],
  "knowsAbout": [
    "holistic healing",
    "integrative wellness",
    "Brain Gym",
    "Aromatherapy",
    "Aroma Freedom Technique (AFT)",
    "Emotion Code",
    "Reiki",
    "Prana Reiki",
    "BioCharger",
    "PEMF therapy",
    "reflexology",
    "quantum reflex integration",
    "sound healing",
    "infrared sauna therapy",
    "stress management",
    "nervous system regulation"
  ],
  "areaServed": {
    "@type": "Country",
    "name": "United States"
  },
  "subjectOf": {
    "@type": "WebPage",
    "@id": "https://www.janicefioreallthingsarepossible.com/#webpage",
    "url": "https://www.janicefioreallthingsarepossible.com/",
    "name": "Holistic Healing | United States | Brain Works Naturally",
    "description": "Nourish your vitality with Brain Works Naturally. Virtual and in-person holistic services and classes supporting mental, emotional, spiritual, and physical healing through the heart-brain-body connection."
  }
};

  /* ===== Helpers ===== */
  function clamp(str, max) {
    if (typeof str !== "string") str = String(str ?? "");
    return str.length <= max ? str : str.slice(0, Math.max(0, max - 1)) + "…";
  }

  function stripTrailingSlash(p) {
    if (!p) return "/";
    return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
  }

  function normalizePathFromUrl(url) {
    try {
      const u = new URL(url);
      return stripTrailingSlash(u.pathname || "/");
    } catch {
      const m = String(url || "").match(/^https?:\/\/[^/]+(\/[^?#]*)?/i);
      return stripTrailingSlash((m && m[1]) || "/");
    }
  }

  function removeLangPrefix(pathname) {
    const m = String(pathname || "/").match(
      /^\/([a-z]{2}(?:-[A-Z]{2})?)(?=\/|$)(.*)$/
    );
    if (!m) return pathname || "/";
    const rest = stripTrailingSlash(m[2] || "/");
    return rest || "/";
  }

  function currentPagePath() {
    const path = window.location.pathname || "/";
    return stripTrailingSlash(path || "/");
  }

  function currentKeyCandidates() {
    const path = currentPagePath();
    const origin = (window.location.origin || "").replace(/\/$/, "");
    const full = origin + path;

    if (path === "/") {
      return [full, "/"];
    }

    const noLang = removeLangPrefix(path);
    return [full, path, stripTrailingSlash(path), noLang, stripTrailingSlash(noLang)];
  }

  function buildIndex(metaJson) {
    const list = (metaJson && metaJson.meta_tags_list) || [];
    const index = {};
    for (const item of list) {
      const path = normalizePathFromUrl(item.page_url);
      let origin = "";
      try {
        origin = new URL(item.page_url).origin;
      } catch {
        origin = "";
      }
      const full = origin ? origin.replace(/\/$/, "") + path : "";

      const entry = {
        title: item.title_tag || "",
        description: item.meta_description || "",
      };

      index[path] = entry;
      index[stripTrailingSlash(path)] = entry;
      if (full) index[full] = entry;
    }
    return index;
  }

  function _stripQuotes(s) {
    return String(s ?? "")
      .replace(/["'“”‘’„«»]/g, "")
      .replace(/\s+/g, " ")
      .replace(/^[\s\-–—·,;:]+|[\s\-–—·,;:]+$/g, "")
      .trim();
  }

  function normalizeKeywordsList(input, opts) {
    const { maxKeywords = 20 } = opts || {};
    if (input == null) return [];
    let items = Array.isArray(input)
      ? input.slice()
      : typeof input === "string"
      ? input.split(",")
      : [];
    const seen = new Set();
    return items
      .map(_stripQuotes)
      .filter((s) => s && s.length >= 2)
      .filter((s) => {
        const k = s.toLowerCase();
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .slice(0, maxKeywords);
  }

  function normalizeKeywords(input, opts) {
    const { maxKeywords = 20, maxLength = 280 } = opts || {};
    const list = normalizeKeywordsList(input, { maxKeywords });
    const content = list.join(", ");
    return content.length > maxLength ? content.slice(0, maxLength) : content;
  }

  function applyAltFallbacks(keywordsPool) {
    if (!Array.isArray(keywordsPool) || keywordsPool.length === 0) return;
    try {
      const images = Array.from(document.querySelectorAll("img"));
      let i = 0;
      images.forEach((img) => {
        const curAlt = (img.getAttribute("alt") || "").trim().toLowerCase();
        const shouldReplace =
          !curAlt ||
          curAlt.endsWith(".jpg") ||
          curAlt.endsWith(".png") ||
          curAlt === "image" ||
          curAlt === "img";
        if (shouldReplace) {
          img.setAttribute("alt", keywordsPool[i % keywordsPool.length]);
          i++;
        }
      });
    } catch {
      /* ignore */
    }
  }

  function optimizeImages() {
    try {
      const images = Array.from(document.querySelectorAll("img"));
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              io.unobserve(img);
              // hook for tracking / lazy work if needed
            }
          });
        });
        images.forEach((img, index) => {
          if (index > 0) io.observe(img);
        });
      }
    } catch (err) {
      console.error("Image optimization error:", err);
    }
  }

  function upsertMeta(nameOrProperty, content, useProperty) {
    const selector = useProperty
      ? `meta[property="${nameOrProperty}"]`
      : `meta[name="${nameOrProperty}"]`;
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      if (useProperty) el.setAttribute("property", nameOrProperty);
      else el.setAttribute("name", nameOrProperty);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function upsertLink(rel, href) {
    let link = document.head.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", rel);
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }

  function injectJsonLd(ldObject) {
    if (!ldObject) return;
    try {
      const existing = Array.from(
        document.head.querySelectorAll('script[type="application/ld+json"]')
      );
      existing.forEach((el) => {
        el.parentNode.removeChild(el);
      });

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(ldObject);
      document.head.appendChild(script);
    } catch (err) {
      console.error("Error injecting JSON-LD:", err);
    }
  }

  function applyJsonLd() {
    injectJsonLd(LD_DATA);
  }

  function applySeoFromJson() {
    try {
      const metaJson = META_DATA;
      const index = buildIndex(metaJson);

      const path = currentPagePath();
      const isHome = path === "/";

      const fallbackBase =
        (CONFIG && CONFIG.baseUrlFallback) ? CONFIG.baseUrlFallback : "";
      const baseUrl = (window.location.origin || fallbackBase).replace(/\/$/, "");
      const canonicalUrl = baseUrl + path;

      const keys = currentKeyCandidates();
      let entry = null;
      for (const k of keys) {
        if (index[k]) {
          entry = index[k];
          break;
        }
      }

      if (!entry) {
        return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
      }

      const title = clamp(entry.title, 60);
      const desc = clamp(entry.description, 185);

      document.title = title;

      const metaList = [
        { type: "name", key: "description", content: desc },
        { type: "property", key: "og:url", content: canonicalUrl },
        { type: "name", key: "resource-hints", content: "preload" },
        { type: "name", key: "format-detection", content: "telephone=yes" },
        { type: "name", key: "mobile-web-app-capable", content: "yes" },
        { type: "name", key: "apple-mobile-web-app-capable", content: "yes" },
      ];

      // opcjonalnie dodaj google-site-verification, jeśli jest w CONFIG
      if (CONFIG && CONFIG.googleSiteVerification) {
        metaList.push({
          type: "name",
          key: "google-site-verification",
          content: CONFIG.googleSiteVerification
        });
      }

      if (isHome && metaJson && metaJson.keywords) {
        const kwContent = normalizeKeywords(metaJson.keywords, {
          maxKeywords: 25,
          maxLength: 512,
        });
        if (kwContent) {
          metaList.push({ type: "name", key: "keywords", content: kwContent });
        }
      }

      metaList.forEach((m) => {
        upsertMeta(m.key, m.content, m.type === "property");
      });

      upsertLink("canonical", canonicalUrl);

      return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
    } catch (err) {
      console.error("Error meta settings:", err);
      return [];
    }
  }

  function initSnippetSEO() {
    const keywordsPool = applySeoFromJson();
    const path = currentPagePath();
    if (path === "/") {
      applyJsonLd();
    }
    optimizeImages();
    applyAltFallbacks(keywordsPool);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSnippetSEO);
  } else {
    initSnippetSEO();
  }
})();

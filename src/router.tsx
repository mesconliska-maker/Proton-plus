import { useEffect, useState, type MouseEvent, type ReactNode, type CSSProperties } from "react";

/* Minimal client-side router (pathname + hash) — no dependencies. */

const EVENT = "app:navigate";

export function usePath(): string {
  const [path, setPath] = useState(() => window.location.pathname);
  useEffect(() => {
    const fn = () => setPath(window.location.pathname);
    window.addEventListener("popstate", fn);
    window.addEventListener(EVENT, fn);
    return () => {
      window.removeEventListener("popstate", fn);
      window.removeEventListener(EVENT, fn);
    };
  }, []);
  return path;
}

function scrollToHash(hash: string) {
  const el = document.getElementById(hash.replace(/^#/, ""));
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top, behavior: "smooth" });
  }
}

export function navigate(to: string) {
  const url = new URL(to, window.location.origin);
  const samePath = url.pathname === window.location.pathname;
  if (samePath && url.hash) {
    history.replaceState(null, "", url.pathname + url.hash);
    scrollToHash(url.hash);
    return;
  }
  history.pushState(null, "", url.pathname + url.hash);
  window.dispatchEvent(new Event(EVENT));
  if (url.hash) {
    // wait for the new page to render
    setTimeout(() => scrollToHash(url.hash), 60);
  } else {
    window.scrollTo({ top: 0 });
  }
}

export function Link({
  href,
  children,
  className,
  style,
  onClick,
  onMouseEnter,
  onMouseLeave,
  ariaLabel,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
  onMouseEnter?: (e: MouseEvent<HTMLElement>) => void;
  onMouseLeave?: (e: MouseEvent<HTMLElement>) => void;
  ariaLabel?: string;
}) {
  const internal = href.startsWith("/") || href.startsWith("#");
  const handle = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.();
    if (!internal || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    e.preventDefault();
    navigate(href.startsWith("#") ? window.location.pathname + href : href);
  };
  return (
    <a
      href={href}
      className={className}
      style={style}
      onClick={handle}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      aria-label={ariaLabel}
      {...(!internal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}

/** Sets <title> and meta description for the current page. */
export function usePageMeta(title: string, description: string) {
  useEffect(() => {
    document.title = title;
    let m = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!m) {
      m = document.createElement("meta");
      m.name = "description";
      document.head.appendChild(m);
    }
    m.content = description;
  }, [title, description]);
}

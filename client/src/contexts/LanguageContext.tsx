import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Lang = "en" | "ar";

interface LangCtx {
  lang: Lang;
  toggle: () => void;
  t: (en: string, ar: string) => string;
  isAr: boolean;
}

const LanguageContext = createContext<LangCtx>({
  lang: "en",
  toggle: () => {},
  t: (en) => en,
  isAr: false,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    try { return (localStorage.getItem("snt_lang") as Lang) || "en"; } catch { return "en"; }
  });

  useEffect(() => {
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
    document.documentElement.classList.toggle("font-arabic", lang === "ar");
    try { localStorage.setItem("snt_lang", lang); } catch {}
  }, [lang]);

  const toggle = () => setLang(l => l === "en" ? "ar" : "en");
  const t = (en: string, ar: string) => lang === "ar" ? ar : en;

  return (
    <LanguageContext.Provider value={{ lang, toggle, t, isAr: lang === "ar" }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);

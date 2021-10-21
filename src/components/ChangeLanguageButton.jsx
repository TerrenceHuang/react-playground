import { useTranslation } from "react-i18next";

function ChangeLanguageButton({ language }) {
  const { t, i18n } = useTranslation();

  return (
    <button
      className={
        "btn btn-primary" + (i18n.language === language ? " active" : "")
      }
      onClick={() => {
        i18n.changeLanguage(language);
      }}
    >
      {t(language)}
    </button>
  );
}

export default ChangeLanguageButton;

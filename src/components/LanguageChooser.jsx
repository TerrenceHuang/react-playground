import ChangeLanguageButton from "./ChangeLanguageButton";

function LanguageChooser() {
  // TODO: Load from language list
  return (
    <div className="btn-group" role="group" aria-label="Language button group">
      <ChangeLanguageButton language="en" />
      <ChangeLanguageButton language="zh-TW" />
    </div>
  );
}

export default LanguageChooser;

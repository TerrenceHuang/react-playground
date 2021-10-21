import ChangeLanguageButton from "./ChangeLanguageButton";

function LanguageChooser() {
  // TODO: Load from language list
  return (
    <div class="btn-group" role="group">
      <ChangeLanguageButton language="en" />
      <ChangeLanguageButton language="zh-TW" />
    </div>
  );
}

export default LanguageChooser;

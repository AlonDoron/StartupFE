import * as Localization from "expo-localization";
import i18n from "i18n-js";

import enUS from "./locales/en-US.json";
import heIL from "./locales/he-IL.json";

i18n.fallbacks = true;

i18n.translations = {
  "en-US": enUS,
  "he-IL": heIL,
};

i18n.locale = Localization.locale;

export default i18n;

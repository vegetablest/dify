const translation = {
  title: 'Narzędzia',
  createCustomTool: 'Utwórz niestandardowe narzędzie',
  type: {
    all: 'Wszystkie',
    builtIn: 'Wbudowane',
    custom: 'Niestandardowe',
    workflow: 'Przepływ pracy',
  },
  contribute: {
    line1: 'Interesuje mnie ',
    line2: 'współtworzenie narzędzi dla Dify.',
    viewGuide: 'Zobacz przewodnik',
  },
  author: 'Przez',
  auth: {
    authorized: 'Zautoryzowane',
    setup: 'Skonfiguruj autoryzację aby użyć',
    setupModalTitle: 'Konfiguruj autoryzację',
    setupModalTitleDescription:
      'Po skonfigurowaniu poświadczeń wszyscy członkowie w przestrzeni roboczej mogą używać tego narzędzia podczas projektowania aplikacji.',
  },
  includeToolNum: '{{num}} narzędzi zawarte',
  addTool: 'Dodaj narzędzie',
  createTool: {
    title: 'Utwórz niestandardowe narzędzie',
    editAction: 'Konfiguruj',
    editTitle: 'Edytuj niestandardowe narzędzie',
    name: 'Nazwa',
    toolNamePlaceHolder: 'Wprowadź nazwę narzędzia',
    schema: 'Schemat',
    schemaPlaceHolder: 'Wprowadź tutaj swój schemat OpenAPI',
    viewSchemaSpec: 'Zobacz specyfikację OpenAPI-Swagger',
    importFromUrl: 'Importuj z adresu URL',
    importFromUrlPlaceHolder: 'https://...',
    urlError: 'Proszę podać prawidłowy URL',
    examples: 'Przykłady',
    exampleOptions: {
      json: 'Pogoda (JSON)',
      yaml: 'Sklep Zoologiczny (YAML)',
      blankTemplate: 'Pusty szablon',
    },
    availableTools: {
      title: 'Dostępne narzędzia',
      name: 'Nazwa',
      description: 'Opis',
      method: 'Metoda',
      path: 'Ścieżka',
      action: 'Akcje',
      test: 'Test',
    },
    authMethod: {
      title: 'Metoda autoryzacji',
      type: 'Typ autoryzacji',
      keyTooltip:
        'Klucz nagłówka HTTP, Możesz pozostawić go z "Autoryzacja" jeśli nie wiesz co to jest lub ustaw go na niestandardową wartość',
      types: {
        none: 'Brak',
        api_key: 'Klucz API',
        apiKeyPlaceholder: 'Nazwa nagłówka HTTP dla Klucza API',
        apiValuePlaceholder: 'Wprowadź Klucz API',
        api_key_query: 'Parametr zapytania',
        api_key_header: 'Nagłówek',
        queryParamPlaceholder: 'Nazwa parametru zapytania dla klucza API',
      },
      key: 'Klucz',
      value: 'Wartość',
      queryParam: 'Parametr zapytania',
      queryParamTooltip: 'Nazwa parametru zapytania klucza API do przekazania, np. "key" w "https://example.com/test?key=API_KEY".',
    },
    authHeaderPrefix: {
      title: 'Typ autoryzacji',
      types: {
        basic: 'Podstawowa',
        bearer: 'Bearer',
        custom: 'Niestandardowa',
      },
    },
    privacyPolicy: 'Polityka prywatności',
    privacyPolicyPlaceholder: 'Proszę wprowadzić politykę prywatności',
    customDisclaimer: 'Oświadczenie niestandardowe',
    customDisclaimerPlaceholder: 'Proszę wprowadzić oświadczenie niestandardowe',
    deleteToolConfirmTitle: 'Skasuj ten przyrząd?',
    deleteToolConfirmContent: 'Usunięcie narzędzia jest nieodwracalne. Użytkownicy nie będą mieli już dostępu do Twojego narzędzia.',
    toolInput: {
      name: 'Nazwa',
      required: 'Wymagane',
      descriptionPlaceholder: 'Opis znaczenia parametru',
      methodParameter: 'Parametr',
      label: 'Tagi',
      methodSetting: 'Ustawienie',
      description: 'Opis',
      method: 'Metoda',
      methodParameterTip: 'LLM wypełnia się podczas wnioskowania',
      labelPlaceholder: 'Wybierz tagi (opcjonalnie)',
      methodSettingTip: 'Użytkownik wypełnia konfigurację narzędzia',
      title: 'Wprowadzanie narzędzi',
    },
    nameForToolCall: 'Nazwa wywołania narzędzia',
    description: 'Opis',
    descriptionPlaceholder: 'Krótki opis przeznaczenia narzędzia, np. zmierz temperaturę dla konkretnej lokalizacji.',
    nameForToolCallTip: 'Obsługuje tylko cyfry, litery i podkreślenia.',
    nameForToolCallPlaceHolder: 'Służy do rozpoznawania maszyn, takich jak getCurrentWeather, list_pets',
    confirmTip: 'Będzie to miało wpływ na aplikacje korzystające z tego narzędzia',
    confirmTitle: 'Potwierdź, aby zapisać ?',
  },
  test: {
    title: 'Test',
    parametersValue: 'Parametry i Wartość',
    parameters: 'Parametry',
    value: 'Wartość',
    testResult: 'Wyniki testu',
    testResultPlaceholder: 'Wynik testu pojawi się tutaj',
  },
  thought: {
    using: 'Używanie',
    used: 'Użyty',
    requestTitle: 'Żądanie do',
    responseTitle: 'Odpowiedź od',
  },
  setBuiltInTools: {
    info: 'Informacje',
    setting: 'Ustawienia',
    toolDescription: 'Opis narzędzia',
    parameters: 'parametry',
    string: 'ciąg znaków',
    number: 'liczba',
    required: 'Wymagane',
    infoAndSetting: 'Informacje i Ustawienia',
    file: 'plik',
  },
  noCustomTool: {
    title: 'Brak niestandardowych narzędzi!',
    content:
      'Dodaj i zarządzaj niestandardowymi narzędziami tutaj, aby budować aplikacje AI.',
    createTool: 'Utwórz Narzędzie',
  },
  noSearchRes: {
    title: 'Przykro nam, brak wyników!',
    content:
      'Nie znaleźliśmy żadnych narzędzi pasujących do Twojego wyszukiwania.',
    reset: 'Resetuj Wyszukiwanie',
  },
  builtInPromptTitle: 'Komunikat',
  toolRemoved: 'Narzędzie usunięte',
  notAuthorized: 'Narzędzie nieautoryzowane',
  howToGet: 'Jak uzyskać',
  addToolModal: {
    manageInTools: 'Zarządzanie w Narzędziach',
    added: 'Dodane',
    type: 'typ',
    category: 'kategoria',
    add: 'dodawać',
    custom: {
      title: 'Brak dostępnego narzędzia niestandardowego',
      tip: 'Utwórz narzędzie niestandardowe',
    },
    workflow: {
      title: 'Brak dostępnego narzędzia workflow',
      tip: 'Publikuj przepływy pracy jako narzędzia w Studio',
    },
    mcp: {
      title: 'Brak dostępnego narzędzia MCP',
      tip: 'Dodaj serwer MCP',
    },
    agent: {
      title: 'Brak dostępnej strategii agenta',
    },
  },
  openInStudio: 'Otwieranie w Studio',
  customToolTip: 'Dowiedz się więcej o niestandardowych narzędziach Dify',
  toolNameUsageTip: 'Nazwa wywołania narzędzia do wnioskowania i podpowiadania agentowi',
  noTools: 'Nie znaleziono narzędzi',
  copyToolName: 'Kopiuj nazwę',
  mcp: {
    create: {
      cardTitle: 'Dodaj serwer MCP (HTTP)',
      cardLink: 'Dowiedz się więcej o integracji serwera MCP',
    },
    noConfigured: 'Serwer nieskonfigurowany',
    updateTime: 'Zaktualizowano',
    toolsCount: '{count} narzędzi',
    noTools: 'Brak dostępnych narzędzi',
    modal: {
      title: 'Dodaj serwer MCP (HTTP)',
      editTitle: 'Edytuj serwer MCP (HTTP)',
      name: 'Nazwa i ikona',
      namePlaceholder: 'Nazwij swój serwer MCP',
      serverUrl: 'URL serwera',
      serverUrlPlaceholder: 'URL do punktu końcowego serwera',
      serverUrlWarning: 'Aktualizacja adresu serwera może zakłócić działanie aplikacji od niego zależnych',
      serverIdentifier: 'Identyfikator serwera',
      serverIdentifierTip: 'Unikalny identyfikator serwera MCP w obszarze roboczym. Tylko małe litery, cyfry, podkreślenia i myślniki. Maks. 24 znaki.',
      serverIdentifierPlaceholder: 'Unikalny identyfikator, np. my-mcp-server',
      serverIdentifierWarning: 'Po zmianie ID serwer nie będzie rozpoznawany przez istniejące aplikacje',
      cancel: 'Anuluj',
      save: 'Zapisz',
      confirm: 'Dodaj i autoryzuj',
    },
    delete: 'Usuń serwer MCP',
    deleteConfirmTitle: 'Usunąć {mcp}?',
    operation: {
      edit: 'Edytuj',
      remove: 'Usuń',
    },
    authorize: 'Autoryzuj',
    authorizing: 'Autoryzowanie...',
    authorizingRequired: 'Wymagana autoryzacja',
    authorizeTip: 'Po autoryzacji narzędzia będą wyświetlane tutaj.',
    update: 'Aktualizuj',
    updating: 'Aktualizowanie...',
    gettingTools: 'Pobieranie narzędzi...',
    updateTools: 'Aktualizowanie narzędzi...',
    toolsEmpty: 'Narzędzia niezaładowane',
    getTools: 'Pobierz narzędzia',
    toolUpdateConfirmTitle: 'Aktualizuj listę narzędzi',
    toolUpdateConfirmContent: 'Aktualizacja listy narzędzi może wpłynąć na istniejące aplikacje. Kontynuować?',
    toolsNum: '{count} narzędzi zawartych',
    onlyTool: '1 narzędzie zawarte',
    identifier: 'Identyfikator serwera (Kliknij, aby skopiować)',
    server: {
      title: 'Serwer MCP',
      url: 'URL serwera',
      reGen: 'Wygenerować ponownie URL serwera?',
      addDescription: 'Dodaj opis',
      edit: 'Edytuj opis',
      modal: {
        addTitle: 'Dodaj opis, aby aktywować serwer MCP',
        editTitle: 'Edytuj opis',
        description: 'Opis',
        descriptionPlaceholder: 'Wyjaśnij funkcjonalność tego narzędzia i sposób użycia przez LLM',
        parameters: 'Parametry',
        parametersTip: 'Dodaj opisy każdego parametru, aby pomóc LLM zrozumieć ich cel i ograniczenia.',
        parametersPlaceholder: 'Cel i ograniczenia parametru',
        confirm: 'Aktywuj serwer MCP',
      },
      publishTip: 'Aplikacja nieopublikowana. Najpierw opublikuj aplikację.',
    },
  },
}

export default translation

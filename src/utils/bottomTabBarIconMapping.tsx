interface TabBarIcon {
  focus: string;
  unfocused: string;
}

interface TabBarIconMappings {
  [key: string]: TabBarIcon; // El nombre de la pantalla como clave y su correspondiente TabBarIcon como valor
}

export const TabBarIconMappings: TabBarIconMappings = {
  Home: {
    focus: require('../assets/images/bottomTabIcons/home-outline-focused.png'),
    unfocused: require('../assets/images/bottomTabIcons/home-outline.png'),
  },
  Profile: {
    focus: require('../assets/images/bottomTabIcons/account-outline-focused.png'),
    unfocused: require('../assets/images/bottomTabIcons/account-outline.png'),
  },
  // Agrega los demás nombres de pantalla y sus correspondientes íconos
};

import { createContext, useState, ReactNode, useMemo} from 'react';


const ShopContext = createContext<{}>({});

const ShopContextProvider = ({ children }: { children: ReactNode }) => {
  const [customThemeOptions, setCustomThemeOption] = useState<ThemeOptions>(
    initialCustomThemeOptions
  );



  return (
    <ShopContext.Provider
      value={{
        toogleDarkMode,
        isDarkModeEnabled: customTheme.palette.type === 'dark',
      }}
    >
      <ShopContext.Provider theme={customTheme}>
        {children}
      </ShopCProvider>
    </ShopContext.Provider>
  );
};

export { ThemeContextProvider, ThemeContext };
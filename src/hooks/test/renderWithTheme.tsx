
import { render } from "@testing-library/react-native";
import { ThemeApp } from "../../assets/Theme";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, JSX } from "react";
import { ThemeProvider } from "styled-components/native";

export const renderWithTheme = (ui: JSX.Element | Iterable<ReactNode> | null | undefined, { theme = ThemeApp(false), ...renderOptions } = {}) => {
    return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>, renderOptions);
  };
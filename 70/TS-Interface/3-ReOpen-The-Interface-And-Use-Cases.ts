/**************************************
 * REOPEN THE INTERFACE AND USE CASES *
 **************************************/

/**
 * The initial `Settings` interface defines settings for the homepage.
 *
 * Properties:
 * - `theme`: A boolean indicating the theme (read-only).
 * - `font`: A string representing the font type.
 */
interface Settings {
  readonly theme: boolean; // Read-only theme setting as a boolean
  font: string; // Font setting as a string
}

/**
 * The `Settings` interface is reopened here to add properties for the articles page.
 *
 * Properties:
 * - `sidebar`: A boolean to show or hide the sidebar.
 */
interface Settings {
  sidebar: boolean; // Sidebar visibility as a boolean
}

/**
 * The `Settings` interface is reopened again to add properties for the contact page.
 *
 * Properties:
 * - `external`: A boolean indicating if external links are enabled.
 */
interface Settings {
  external: boolean; // External links setting as a boolean
}

/**
 * The object `userSettings` adheres to the final merged `Settings` interface,
 * combining properties defined across multiple reopenings of the interface.
 */
let userSettings: Settings = {
  theme: true, // Theme is set to 'true'
  font: "Open Sans", // Font is set to 'Open Sans'
  sidebar: false, // Sidebar is disabled (false)
  external: true, // External links are enabled (true)
};

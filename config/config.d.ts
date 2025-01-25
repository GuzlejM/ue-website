declare module "@config/config.json" {
  interface SiteConfig {
    title: string;
    base_url: string;
    favicon: string;
    logo: string;
    logo_width: string;
    logo_height: string;
    logo_text: string;
  }

  interface Settings {
    theme_switcher: boolean;
    theme_default: string;
    pagination: number;
    summary_length: number;
    blog_folder: string;
  }

  interface NavButton {
    enable: boolean;
    label: string;
    link: string;
  }

  interface Params {
    contact_form_action: string;
    tag_manager_id: string;
    footer_content: string;
    copyright: string;
    copyright_company: string;
  }

  interface Metadata {
    meta_author: string;
    meta_image: string;
    meta_description: string;
  }

  interface Social {
    facebook: string;
    twitter: string;
    linkedin: string;
    youtube: string;
  }

  interface Config {
    site: SiteConfig;
    settings: Settings;
    nav_button: NavButton;
    params: Params;
    metadata: Metadata;
    social: Social;
  }

  const config: Config;
  export default config;
} 
import {StoryblokStory} from 'storyblok-generate-ts'

export interface ContentAccordionStoryblok {
  item?: ContentAccordionItemStoryblok[];
  _uid: string;
  component: "ContentAccordion";
  [k: string]: any;
}

export interface RichtextStoryblok {
  type: string;
  content?: RichtextStoryblok[];
  marks?: RichtextStoryblok[];
  attrs?: any;
  text?: string;
  [k: string]: any;
}

export interface ContentAccordionItemStoryblok {
  title?: string;
  content?: RichtextStoryblok;
  _uid: string;
  component: "ContentAccordionItem";
  [k: string]: any;
}

export interface AssetStoryblok {
  alt?: string;
  copyright?: string;
  id: number;
  filename: string;
  name: string;
  title?: string;
  focus?: string;
  [k: string]: any;
}

export type MultilinkStoryblok =
  | {
      cached_url?: string;
      linktype?: string;
      [k: string]: any;
    }
  | {
      id?: string;
      cached_url?: string;
      anchor?: string;
      linktype?: "story";
      story?: {
        name: string;
        created_at?: string;
        published_at?: string;
        id: number;
        uuid: string;
        content?: {
          [k: string]: any;
        };
        slug: string;
        full_slug: string;
        sort_by_date?: null | string;
        position?: number;
        tag_list?: string[];
        is_startpage?: boolean;
        parent_id?: null | number;
        meta_data?: null | {
          [k: string]: any;
        };
        group_id?: string;
        first_published_at?: string;
        release_id?: null | number;
        lang?: string;
        path?: null | string;
        alternates?: any[];
        default_full_slug?: null | string;
        translated_slugs?: null | any[];
        [k: string]: any;
      };
      [k: string]: any;
    }
  | {
      url?: string;
      cached_url?: string;
      anchor?: string;
      linktype?: "asset" | "url";
      [k: string]: any;
    }
  | {
      email?: string;
      linktype?: "email";
      [k: string]: any;
    };

export interface ContentButtonStoryblok {
  name?: string;
  href?: AssetStoryblok;
  link?: MultilinkStoryblok;
  add_gutter?: boolean;
  add_margin_bottom?: boolean;
  _uid: string;
  component: "ContentButton";
  [k: string]: any;
}

export interface ContentGridStoryblok {
  columns?: any[];
  force_row?: boolean;
  add_gutter?: boolean;
  add_margin_bottom?: boolean;
  gap?: "" | "gap-1" | "gap-2" | "gap-3" | "gap-4" | "gap-5";
  justify_content?: "" | "flex-start" | "center" | "space-around" | "space-between" | "space-evenly" | "flex-end";
  _uid: string;
  component: "ContentGrid";
  [k: string]: any;
}

export interface ContentIconStoryblok {
  Title?: string;
  icon_svg_code?: string;
  icon_image?: AssetStoryblok;
  _uid: string;
  component: "ContentIcon";
  [k: string]: any;
}

export interface ContentImageStoryblok {
  src?: AssetStoryblok;
  mobile?: AssetStoryblok;
  align?: "" | "center" | "left" | "right" | "full";
  _uid: string;
  component: "ContentImage";
  [k: string]: any;
}

export interface ContentLinkStoryblok {
  href?: MultilinkStoryblok;
  title?: string;
  blocklink?: any[];
  _uid: string;
  component: "ContentLink";
  [k: string]: any;
}

export interface ContentPortfolioStoryblok {
  content?: any[];
  image?: ContentImageStoryblok[];
  _uid: string;
  component: "ContentPortfolio";
  [k: string]: any;
}

export interface ContentQuoteStoryblok {
  quote?: string;
  author?: string;
  image?: ContentImageStoryblok[];
  font_color?: "" | "white" | "black";
  _uid: string;
  component: "ContentQuote";
  [k: string]: any;
}

export interface ContentRichtextStoryblok {
  body?: RichtextStoryblok;
  _uid: string;
  component: "ContentRichtext";
  [k: string]: any;
}

export interface ContentSkillStoryblok {
  name?: string;
  level?: string;
  _uid: string;
  component: "ContentSkill";
  [k: string]: any;
}

export interface ContentSkillsStoryblok {
  title?: string;
  skill?: ContentSkillStoryblok[];
  _uid: string;
  component: "ContentSkills";
  [k: string]: any;
}

export interface ContentSlidertextStoryblok {
  columns?: any[];
  _uid: string;
  component: "ContentSlidertext";
  [k: string]: any;
}

export interface ContentSwiperStoryblok {
  item?: any[];
  type?: "" | "skillbox" | "img";
  _uid: string;
  component: "ContentSwiper";
  [k: string]: any;
}

export interface ContentTitleStoryblok {
  name?: string;
  level?: string;
  _uid: string;
  component: "ContentTitle";
  [k: string]: any;
}

export interface ContentVideoStoryblok {
  video_webm?: AssetStoryblok;
  video_mp4?: AssetStoryblok;
  _uid: string;
  component: "ContentVideo";
  [k: string]: any;
}

export interface FormInputStoryblok {
  label?: string;
  name?: string;
  placeholder?: string;
  type: "" | "text" | "email" | "number" | "url" | "tel" | "date";
  _uid: string;
  component: "FormInput";
  [k: string]: any;
}

export interface FormSectionStoryblok {
  fields?: FormInputStoryblok[];
  _uid: string;
  component: "FormSection";
  [k: string]: any;
}

export interface GlobalStoryblok {
  site_title?: string;
  author?: string;
  Header_Navigation?: (GlobalStoryblok | HeaderLinkStoryblok)[];
  _uid: string;
  component: "global";
  uuid?: string;
  [k: string]: any;
}

export interface GlobalReferenceStoryblok {
  reference?: any;
  _uid: string;
  component: "global_reference";
  [k: string]: any;
}

export interface HeaderLinkStoryblok {
  Header_Link: MultilinkStoryblok;
  display_name?: string;
  Sub_Category?: HeaderLinkStoryblok[];
  _uid: string;
  component: "HeaderLink";
  [k: string]: any;
}

export interface TemplatesArticleStoryblok {
  body?: (
    | ContentAccordionStoryblok
    | ContentAccordionItemStoryblok
    | ContentButtonStoryblok
    | ContentGridStoryblok
    | ContentIconStoryblok
    | ContentImageStoryblok
    | ContentLinkStoryblok
    | ContentPortfolioStoryblok
    | ContentQuoteStoryblok
    | ContentRichtextStoryblok
    | ContentSkillStoryblok
    | ContentSkillsStoryblok
    | ContentSlidertextStoryblok
    | ContentSwiperStoryblok
    | ContentTitleStoryblok
    | ContentVideoStoryblok
  )[];
  globals?: (GlobalStoryblok | GlobalReferenceStoryblok)[];
  showNav?: boolean;
  _uid: string;
  component: "TemplatesArticle";
  [k: string]: any;
}

export interface TemplatesPageStoryblok {
  body?: any[];
  bg_image_desktop?: AssetStoryblok;
  bg_image_mobile?: AssetStoryblok;
  globals?: GlobalReferenceStoryblok[];
  showNav?: boolean;
  _uid: string;
  component: "TemplatesPage";
  [k: string]: any;
}

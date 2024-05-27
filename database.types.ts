export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      acme_cache: {
        Row: {
          data: string
          key: string
          updated_at: string
        }
        Insert: {
          data: string
          key: string
          updated_at: string
        }
        Update: {
          data?: string
          key?: string
          updated_at?: string
        }
        Relationships: []
      }
      api_keys: {
        Row: {
          created_at: string | null
          description: string
          id: number
          last_used_at: string | null
          token: string
          user_id: number
        }
        Insert: {
          created_at?: string | null
          description: string
          id?: number
          last_used_at?: string | null
          token: string
          user_id: number
        }
        Update: {
          created_at?: string | null
          description?: string
          id?: number
          last_used_at?: string | null
          token?: string
          user_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "api_keys_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      categories: {
        Row: {
          hide_globally: boolean
          id: number
          title: string
          user_id: number
        }
        Insert: {
          hide_globally?: boolean
          id?: number
          title: string
          user_id: number
        }
        Update: {
          hide_globally?: boolean
          id?: number
          title?: string
          user_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "categories_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      enclosures: {
        Row: {
          entry_id: number
          id: number
          media_progression: number | null
          mime_type: string | null
          size: number | null
          url: string
          user_id: number
        }
        Insert: {
          entry_id: number
          id?: number
          media_progression?: number | null
          mime_type?: string | null
          size?: number | null
          url: string
          user_id: number
        }
        Update: {
          entry_id?: number
          id?: number
          media_progression?: number | null
          mime_type?: string | null
          size?: number | null
          url?: string
          user_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "enclosures_entry_id_fkey"
            columns: ["entry_id"]
            isOneToOne: false
            referencedRelation: "entries"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "enclosures_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      entries: {
        Row: {
          author: string | null
          changed_at: string
          comments_url: string | null
          content: string | null
          created_at: string
          document_vectors: unknown | null
          feed_id: number
          hash: string
          id: number
          published_at: string
          reading_time: number
          share_code: string
          starred: boolean | null
          status: Database["public"]["Enums"]["entry_status"] | null
          tags: string[] | null
          title: string
          url: string
          user_id: number
        }
        Insert: {
          author?: string | null
          changed_at: string
          comments_url?: string | null
          content?: string | null
          created_at?: string
          document_vectors?: unknown | null
          feed_id: number
          hash: string
          id?: number
          published_at: string
          reading_time?: number
          share_code?: string
          starred?: boolean | null
          status?: Database["public"]["Enums"]["entry_status"] | null
          tags?: string[] | null
          title: string
          url: string
          user_id: number
        }
        Update: {
          author?: string | null
          changed_at?: string
          comments_url?: string | null
          content?: string | null
          created_at?: string
          document_vectors?: unknown | null
          feed_id?: number
          hash?: string
          id?: number
          published_at?: string
          reading_time?: number
          share_code?: string
          starred?: boolean | null
          status?: Database["public"]["Enums"]["entry_status"] | null
          tags?: string[] | null
          title?: string
          url?: string
          user_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "entries_feed_id_fkey"
            columns: ["feed_id"]
            isOneToOne: false
            referencedRelation: "feeds"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "entries_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      feed_icons: {
        Row: {
          feed_id: number
          icon_id: number
        }
        Insert: {
          feed_id: number
          icon_id: number
        }
        Update: {
          feed_id?: number
          icon_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "feed_icons_feed_id_fkey"
            columns: ["feed_id"]
            isOneToOne: false
            referencedRelation: "feeds"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "feed_icons_icon_id_fkey"
            columns: ["icon_id"]
            isOneToOne: false
            referencedRelation: "icons"
            referencedColumns: ["id"]
          },
        ]
      }
      feeds: {
        Row: {
          allow_self_signed_certificates: boolean
          apprise_service_urls: string | null
          blocklist_rules: string
          category_id: number
          checked_at: string | null
          cookie: string | null
          crawler: boolean | null
          disabled: boolean | null
          etag_header: string | null
          feed_url: string
          fetch_via_proxy: boolean | null
          hide_globally: boolean
          id: number
          ignore_http_cache: boolean | null
          keeplist_rules: string
          last_modified_header: string | null
          next_check_at: string | null
          no_media_player: boolean | null
          parsing_error_count: number | null
          parsing_error_msg: string | null
          password: string | null
          rewrite_rules: string | null
          scraper_rules: string | null
          site_url: string
          title: string
          url_rewrite_rules: string
          user_agent: string | null
          user_id: number
          username: string | null
        }
        Insert: {
          allow_self_signed_certificates?: boolean
          apprise_service_urls?: string | null
          blocklist_rules?: string
          category_id: number
          checked_at?: string | null
          cookie?: string | null
          crawler?: boolean | null
          disabled?: boolean | null
          etag_header?: string | null
          feed_url: string
          fetch_via_proxy?: boolean | null
          hide_globally?: boolean
          id?: number
          ignore_http_cache?: boolean | null
          keeplist_rules?: string
          last_modified_header?: string | null
          next_check_at?: string | null
          no_media_player?: boolean | null
          parsing_error_count?: number | null
          parsing_error_msg?: string | null
          password?: string | null
          rewrite_rules?: string | null
          scraper_rules?: string | null
          site_url: string
          title: string
          url_rewrite_rules?: string
          user_agent?: string | null
          user_id: number
          username?: string | null
        }
        Update: {
          allow_self_signed_certificates?: boolean
          apprise_service_urls?: string | null
          blocklist_rules?: string
          category_id?: number
          checked_at?: string | null
          cookie?: string | null
          crawler?: boolean | null
          disabled?: boolean | null
          etag_header?: string | null
          feed_url?: string
          fetch_via_proxy?: boolean | null
          hide_globally?: boolean
          id?: number
          ignore_http_cache?: boolean | null
          keeplist_rules?: string
          last_modified_header?: string | null
          next_check_at?: string | null
          no_media_player?: boolean | null
          parsing_error_count?: number | null
          parsing_error_msg?: string | null
          password?: string | null
          rewrite_rules?: string | null
          scraper_rules?: string | null
          site_url?: string
          title?: string
          url_rewrite_rules?: string
          user_agent?: string | null
          user_id?: number
          username?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "feeds_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "feeds_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      icons: {
        Row: {
          content: string
          hash: string
          id: number
          mime_type: string
        }
        Insert: {
          content: string
          hash: string
          id?: number
          mime_type: string
        }
        Update: {
          content?: string
          hash?: string
          id?: number
          mime_type?: string
        }
        Relationships: []
      }
      integrations: {
        Row: {
          apprise_enabled: boolean | null
          apprise_services_url: string | null
          apprise_url: string | null
          espial_api_key: string | null
          espial_enabled: boolean | null
          espial_tags: string | null
          espial_url: string | null
          fever_enabled: boolean | null
          fever_token: string | null
          fever_username: string | null
          googlereader_enabled: boolean | null
          googlereader_password: string | null
          googlereader_username: string | null
          instapaper_enabled: boolean | null
          instapaper_password: string | null
          instapaper_username: string | null
          linkding_api_key: string | null
          linkding_enabled: boolean | null
          linkding_mark_as_unread: boolean | null
          linkding_tags: string | null
          linkding_url: string | null
          matrix_bot_chat_id: string | null
          matrix_bot_enabled: boolean | null
          matrix_bot_password: string | null
          matrix_bot_url: string | null
          matrix_bot_user: string | null
          notion_enabled: boolean | null
          notion_page_id: string | null
          notion_token: string | null
          nunux_keeper_api_key: string | null
          nunux_keeper_enabled: boolean | null
          nunux_keeper_url: string | null
          pinboard_enabled: boolean | null
          pinboard_mark_as_unread: boolean | null
          pinboard_tags: string | null
          pinboard_token: string | null
          pocket_access_token: string | null
          pocket_consumer_key: string | null
          pocket_enabled: boolean | null
          readwise_api_key: string | null
          readwise_enabled: boolean | null
          rssbridge_enabled: boolean | null
          rssbridge_url: string | null
          shaarli_api_secret: string | null
          shaarli_enabled: boolean | null
          shaarli_url: string | null
          shiori_enabled: boolean | null
          shiori_password: string | null
          shiori_url: string | null
          shiori_username: string | null
          telegram_bot_chat_id: string | null
          telegram_bot_disable_buttons: boolean | null
          telegram_bot_disable_notification: boolean | null
          telegram_bot_disable_web_page_preview: boolean | null
          telegram_bot_enabled: boolean | null
          telegram_bot_token: string | null
          telegram_bot_topic_id: number | null
          user_id: number
          wallabag_client_id: string | null
          wallabag_client_secret: string | null
          wallabag_enabled: boolean | null
          wallabag_only_url: boolean | null
          wallabag_password: string | null
          wallabag_url: string | null
          wallabag_username: string | null
          webhook_enabled: boolean | null
          webhook_secret: string | null
          webhook_url: string | null
        }
        Insert: {
          apprise_enabled?: boolean | null
          apprise_services_url?: string | null
          apprise_url?: string | null
          espial_api_key?: string | null
          espial_enabled?: boolean | null
          espial_tags?: string | null
          espial_url?: string | null
          fever_enabled?: boolean | null
          fever_token?: string | null
          fever_username?: string | null
          googlereader_enabled?: boolean | null
          googlereader_password?: string | null
          googlereader_username?: string | null
          instapaper_enabled?: boolean | null
          instapaper_password?: string | null
          instapaper_username?: string | null
          linkding_api_key?: string | null
          linkding_enabled?: boolean | null
          linkding_mark_as_unread?: boolean | null
          linkding_tags?: string | null
          linkding_url?: string | null
          matrix_bot_chat_id?: string | null
          matrix_bot_enabled?: boolean | null
          matrix_bot_password?: string | null
          matrix_bot_url?: string | null
          matrix_bot_user?: string | null
          notion_enabled?: boolean | null
          notion_page_id?: string | null
          notion_token?: string | null
          nunux_keeper_api_key?: string | null
          nunux_keeper_enabled?: boolean | null
          nunux_keeper_url?: string | null
          pinboard_enabled?: boolean | null
          pinboard_mark_as_unread?: boolean | null
          pinboard_tags?: string | null
          pinboard_token?: string | null
          pocket_access_token?: string | null
          pocket_consumer_key?: string | null
          pocket_enabled?: boolean | null
          readwise_api_key?: string | null
          readwise_enabled?: boolean | null
          rssbridge_enabled?: boolean | null
          rssbridge_url?: string | null
          shaarli_api_secret?: string | null
          shaarli_enabled?: boolean | null
          shaarli_url?: string | null
          shiori_enabled?: boolean | null
          shiori_password?: string | null
          shiori_url?: string | null
          shiori_username?: string | null
          telegram_bot_chat_id?: string | null
          telegram_bot_disable_buttons?: boolean | null
          telegram_bot_disable_notification?: boolean | null
          telegram_bot_disable_web_page_preview?: boolean | null
          telegram_bot_enabled?: boolean | null
          telegram_bot_token?: string | null
          telegram_bot_topic_id?: number | null
          user_id: number
          wallabag_client_id?: string | null
          wallabag_client_secret?: string | null
          wallabag_enabled?: boolean | null
          wallabag_only_url?: boolean | null
          wallabag_password?: string | null
          wallabag_url?: string | null
          wallabag_username?: string | null
          webhook_enabled?: boolean | null
          webhook_secret?: string | null
          webhook_url?: string | null
        }
        Update: {
          apprise_enabled?: boolean | null
          apprise_services_url?: string | null
          apprise_url?: string | null
          espial_api_key?: string | null
          espial_enabled?: boolean | null
          espial_tags?: string | null
          espial_url?: string | null
          fever_enabled?: boolean | null
          fever_token?: string | null
          fever_username?: string | null
          googlereader_enabled?: boolean | null
          googlereader_password?: string | null
          googlereader_username?: string | null
          instapaper_enabled?: boolean | null
          instapaper_password?: string | null
          instapaper_username?: string | null
          linkding_api_key?: string | null
          linkding_enabled?: boolean | null
          linkding_mark_as_unread?: boolean | null
          linkding_tags?: string | null
          linkding_url?: string | null
          matrix_bot_chat_id?: string | null
          matrix_bot_enabled?: boolean | null
          matrix_bot_password?: string | null
          matrix_bot_url?: string | null
          matrix_bot_user?: string | null
          notion_enabled?: boolean | null
          notion_page_id?: string | null
          notion_token?: string | null
          nunux_keeper_api_key?: string | null
          nunux_keeper_enabled?: boolean | null
          nunux_keeper_url?: string | null
          pinboard_enabled?: boolean | null
          pinboard_mark_as_unread?: boolean | null
          pinboard_tags?: string | null
          pinboard_token?: string | null
          pocket_access_token?: string | null
          pocket_consumer_key?: string | null
          pocket_enabled?: boolean | null
          readwise_api_key?: string | null
          readwise_enabled?: boolean | null
          rssbridge_enabled?: boolean | null
          rssbridge_url?: string | null
          shaarli_api_secret?: string | null
          shaarli_enabled?: boolean | null
          shaarli_url?: string | null
          shiori_enabled?: boolean | null
          shiori_password?: string | null
          shiori_url?: string | null
          shiori_username?: string | null
          telegram_bot_chat_id?: string | null
          telegram_bot_disable_buttons?: boolean | null
          telegram_bot_disable_notification?: boolean | null
          telegram_bot_disable_web_page_preview?: boolean | null
          telegram_bot_enabled?: boolean | null
          telegram_bot_token?: string | null
          telegram_bot_topic_id?: number | null
          user_id?: number
          wallabag_client_id?: string | null
          wallabag_client_secret?: string | null
          wallabag_enabled?: boolean | null
          wallabag_only_url?: boolean | null
          wallabag_password?: string | null
          wallabag_url?: string | null
          wallabag_username?: string | null
          webhook_enabled?: boolean | null
          webhook_secret?: string | null
          webhook_url?: string | null
        }
        Relationships: []
      }
      schema_version: {
        Row: {
          version: string
        }
        Insert: {
          version: string
        }
        Update: {
          version?: string
        }
        Relationships: []
      }
      sessions: {
        Row: {
          created_at: string
          data: Json
          id: string
        }
        Insert: {
          created_at?: string
          data: Json
          id: string
        }
        Update: {
          created_at?: string
          data?: Json
          id?: string
        }
        Relationships: []
      }
      summaries: {
        Row: {
          created_at: string
          entry_id: number
          id: number
          summary: string | null
          tags: string[] | null
        }
        Insert: {
          created_at?: string
          entry_id: number
          id?: number
          summary?: string | null
          tags?: string[] | null
        }
        Update: {
          created_at?: string
          entry_id?: number
          id?: number
          summary?: string | null
          tags?: string[] | null
        }
        Relationships: [
          {
            foreignKeyName: "public_summaries_entry_id_fkey"
            columns: ["entry_id"]
            isOneToOne: true
            referencedRelation: "entries"
            referencedColumns: ["id"]
          },
        ]
      }
      user_sessions: {
        Row: {
          created_at: string | null
          id: number
          ip: unknown | null
          token: string
          user_agent: string | null
          user_id: number
        }
        Insert: {
          created_at?: string | null
          id?: number
          ip?: unknown | null
          token: string
          user_agent?: string | null
          user_id: number
        }
        Update: {
          created_at?: string | null
          id?: number
          ip?: unknown | null
          token?: string
          user_agent?: string | null
          user_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "sessions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      users: {
        Row: {
          categories_sorting_order: string
          cjk_reading_speed: number | null
          default_home_page: string | null
          default_reading_speed: number | null
          display_mode:
            | Database["public"]["Enums"]["webapp_display_mode"]
            | null
          entries_per_page: number | null
          entry_direction:
            | Database["public"]["Enums"]["entry_sorting_direction"]
            | null
          entry_order: Database["public"]["Enums"]["entry_sorting_order"] | null
          entry_swipe: boolean | null
          gesture_nav: string | null
          google_id: string
          id: number
          is_admin: boolean | null
          keyboard_shortcuts: boolean | null
          language: string | null
          last_login_at: string | null
          mark_read_on_view: boolean | null
          openid_connect_id: string
          password: string | null
          show_reading_time: boolean | null
          stylesheet: string
          theme: string | null
          timezone: string | null
          username: string
        }
        Insert: {
          categories_sorting_order?: string
          cjk_reading_speed?: number | null
          default_home_page?: string | null
          default_reading_speed?: number | null
          display_mode?:
            | Database["public"]["Enums"]["webapp_display_mode"]
            | null
          entries_per_page?: number | null
          entry_direction?:
            | Database["public"]["Enums"]["entry_sorting_direction"]
            | null
          entry_order?:
            | Database["public"]["Enums"]["entry_sorting_order"]
            | null
          entry_swipe?: boolean | null
          gesture_nav?: string | null
          google_id?: string
          id?: number
          is_admin?: boolean | null
          keyboard_shortcuts?: boolean | null
          language?: string | null
          last_login_at?: string | null
          mark_read_on_view?: boolean | null
          openid_connect_id?: string
          password?: string | null
          show_reading_time?: boolean | null
          stylesheet?: string
          theme?: string | null
          timezone?: string | null
          username: string
        }
        Update: {
          categories_sorting_order?: string
          cjk_reading_speed?: number | null
          default_home_page?: string | null
          default_reading_speed?: number | null
          display_mode?:
            | Database["public"]["Enums"]["webapp_display_mode"]
            | null
          entries_per_page?: number | null
          entry_direction?:
            | Database["public"]["Enums"]["entry_sorting_direction"]
            | null
          entry_order?:
            | Database["public"]["Enums"]["entry_sorting_order"]
            | null
          entry_swipe?: boolean | null
          gesture_nav?: string | null
          google_id?: string
          id?: number
          is_admin?: boolean | null
          keyboard_shortcuts?: boolean | null
          language?: string | null
          last_login_at?: string | null
          mark_read_on_view?: boolean | null
          openid_connect_id?: string
          password?: string | null
          show_reading_time?: boolean | null
          stylesheet?: string
          theme?: string | null
          timezone?: string | null
          username?: string
        }
        Relationships: []
      }
      webauthn_credentials: {
        Row: {
          aaguid: string | null
          added_on: string | null
          attestation_type: string
          clone_warning: boolean | null
          cred_id: string
          handle: string
          last_seen_on: string | null
          name: string | null
          public_key: string
          sign_count: number | null
          user_id: number
        }
        Insert: {
          aaguid?: string | null
          added_on?: string | null
          attestation_type: string
          clone_warning?: boolean | null
          cred_id: string
          handle: string
          last_seen_on?: string | null
          name?: string | null
          public_key: string
          sign_count?: number | null
          user_id: number
        }
        Update: {
          aaguid?: string | null
          added_on?: string | null
          attestation_type?: string
          clone_warning?: boolean | null
          cred_id?: string
          handle?: string
          last_seen_on?: string | null
          name?: string | null
          public_key?: string
          sign_count?: number | null
          user_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "webauthn_credentials_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      summary_view: {
        Row: {
          entry_title: string | null
          entry_url: string | null
          feed_id: number | null
          feed_title: string | null
          id: number | null
          published_at: string | null
          summary: string | null
        }
        Relationships: [
          {
            foreignKeyName: "entries_feed_id_fkey"
            columns: ["feed_id"]
            isOneToOne: false
            referencedRelation: "feeds"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Functions: {
      akeys: {
        Args: {
          "": unknown
        }
        Returns: string[]
      }
      avals: {
        Args: {
          "": unknown
        }
        Returns: string[]
      }
      each: {
        Args: {
          hs: unknown
        }
        Returns: Record<string, unknown>[]
      }
      ghstore_compress: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      ghstore_decompress: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      ghstore_in: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      ghstore_options: {
        Args: {
          "": unknown
        }
        Returns: undefined
      }
      ghstore_out: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      hnswhandler: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      hstore:
        | {
            Args: {
              "": string[]
            }
            Returns: unknown
          }
        | {
            Args: {
              "": Record<string, unknown>
            }
            Returns: unknown
          }
      hstore_hash: {
        Args: {
          "": unknown
        }
        Returns: number
      }
      hstore_in: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      hstore_out: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      hstore_recv: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      hstore_send: {
        Args: {
          "": unknown
        }
        Returns: string
      }
      hstore_subscript_handler: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      hstore_to_array: {
        Args: {
          "": unknown
        }
        Returns: string[]
      }
      hstore_to_json: {
        Args: {
          "": unknown
        }
        Returns: Json
      }
      hstore_to_json_loose: {
        Args: {
          "": unknown
        }
        Returns: Json
      }
      hstore_to_jsonb: {
        Args: {
          "": unknown
        }
        Returns: Json
      }
      hstore_to_jsonb_loose: {
        Args: {
          "": unknown
        }
        Returns: Json
      }
      hstore_to_matrix: {
        Args: {
          "": unknown
        }
        Returns: string[]
      }
      hstore_version_diag: {
        Args: {
          "": unknown
        }
        Returns: number
      }
      ivfflathandler: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      skeys: {
        Args: {
          "": unknown
        }
        Returns: string[]
      }
      svals: {
        Args: {
          "": unknown
        }
        Returns: string[]
      }
      vector_avg: {
        Args: {
          "": number[]
        }
        Returns: string
      }
      vector_dims: {
        Args: {
          "": string
        }
        Returns: number
      }
      vector_norm: {
        Args: {
          "": string
        }
        Returns: number
      }
      vector_out: {
        Args: {
          "": string
        }
        Returns: unknown
      }
      vector_send: {
        Args: {
          "": string
        }
        Returns: string
      }
      vector_typmod_in: {
        Args: {
          "": unknown[]
        }
        Returns: number
      }
    }
    Enums: {
      entry_sorting_direction: "asc" | "desc"
      entry_sorting_order: "published_at" | "created_at"
      entry_status: "unread" | "read" | "removed"
      webapp_display_mode:
        | "fullscreen"
        | "standalone"
        | "minimal-ui"
        | "browser"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

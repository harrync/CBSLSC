import type { Schema, Attribute } from '@strapi/strapi';

export interface BlockFaqList extends Schema.Component {
  collectionName: 'components_block_faq_lists';
  info: {
    displayName: 'FAQ list';
    icon: 'question';
  };
  attributes: {
    Title: Attribute.String & Attribute.Required;
  };
}

export interface BlockForm extends Schema.Component {
  collectionName: 'components_block_forms';
  info: {
    displayName: 'Form';
    icon: 'paperPlane';
  };
  attributes: {
    Embed: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'block.faq-list': BlockFaqList;
      'block.form': BlockForm;
    }
  }
}

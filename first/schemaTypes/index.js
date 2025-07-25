// schemaTypes/index.js

import blockContent from './blockContent';
import category from './category';
import post from './post';
import author from './author';
import directory from './directory';
import galleryImage from './galleryImage'

export const schemaTypes = [post, author, category, blockContent, directory,galleryImage]; // ✅ now an array

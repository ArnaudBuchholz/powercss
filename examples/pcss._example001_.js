/* pss._example001_.js
 * Example 001 of run-time generated and managed CSS
 * using PowerCSS - the basics
 * Michael S. Mikowski - mike.mikowski@gmail.com
*/
/*jslint        browser : true, continue : true,
  devel : true,  indent : 2,      maxerr : 50,
  newcap : true,  nomen : true, plusplus : true,
  regexp : true, sloppy : true,     vars : false,
  white : true,    todo : true,  unparam : true
*/
/*global pcss */

/*  I. Recommended units: rem and %.
 * II. Recommended order: Outside-In
 *    1. display, visibility, opacity, z-index
 *    2. box-sizing, position, floats, clear
 *    3. top, right, bottom, left and vertical-align
 *    4. margin defs, box-shadow
 *    5. border, border-radius
 *    6. height, width
 *    7. padding, overflow, cursor
 *    8. background, text-align, white-space,
 *    9. content defs - font-size, line-height, font, color everything else
 *    -- break --
 *    10. css transition or animation definitions
*/

// BEGIN pcss._example001_
pcss._example001_ = function () {
  var
    base_vsheet_list,
    box_vsheet_list
    ;

  pcss._initModule_();

  // Begin Add _base_vsheet_
  base_vsheet_list = [
    { _select_str_  : 'body',
      _rule_map_     : {
        _display_    : '_block_',
        _box_sizing_ : '_border_box_',
        _padding_    : '_2rem_',
        _margin_     : '_0_',
        _font_family_: '_font_sans_',
        _font_size_  : [ '16px' ],
        _color_      : '_x888_'
      }
    },
    { _select_str_ : 'input',
      _rule_map_ : {
        _margin_        : '_d5rem_',
        _width_         : [ '10rem' ],
        _border_        : [ '.125rem solid #ddd' ],
        _border_radius_ : '_d5rem_',
        _outline_       : '_none_',
        _padding_       : '_d5rem_',
        _background_    : '_x888_',
        _font_size_     : '_1rem_',
        _color_         : '_xddd_'
      }
    },
    { _select_str_ : 'input:focus',
      _rule_map_   : {
        _border_color_ : '_xfff_',
        _background_   : '_x444_',
        _color_        : '_xfff_'
      }
    }
  ];

  pcss._setVsheetList_({
    _vsheet_id_   : '_base_vsheet_',
    _vsheet_list_ : base_vsheet_list
  });
  // End Add _base_vsheet_

  // Begin Add _box_vsheet_
  box_vsheet_list = [
    { _select_str_ : '.pcss-_box_',
      _rule_lock_list_ : [ '_font_size_' ],
      _rule_map_ : {
        _display_        : '_inline_block_',
        _opacity_        : '_1_',
        _box_sizing_     : '_border_box_',
        _position_       : '_relative_',
        _vertical_align_ : '_top_',
        _margin_         : '_1rem_',
        _box_shadow_     : [ 'rgba( 0, 0, 0, .5) 0 0 .25rem 0' ],
        _border_         : [ '0.25rem solid #eee' ],
        _border_radius_  : '_1rem_',
        _width_          : [ '16rem' ],
        _height_         : [ '8rem' ],
        _padding_top_    : '_1rem_',
        _background_     : {
          _alt_list_ : [
            [ '#f85032' ],
            [ '-moz-linear-gradient(left, #f85032 0%, #6d362d 100%)' ],
            [ '-webkit-linear-gradient(left, #f85032 0%, #6d362d 100%)' ],
            [ 'linear-gradient(to bottom, #f85032 0%, #6d362d 100%)' ]
          ]
        },
        _font_size_      : '_1d5rem_',
        _font_weight_    : '_800_',
        _color_          : '_xfff_',
        _text_align_     : '_center_'
      }
    }
  ];

  pcss._setVsheetList_({
    _vsheet_id_   : '_box_vsheet_',
    _vsheet_list_ : box_vsheet_list
  });
  // End Add _box_vsheet_

  // Begin Create a cascade and enable it
  pcss._setCascadeObj_({
    _cascade_id_   : '_example001_',
    _cascade_list_ : [ '_base_vsheet_', '_box_vsheet_' ]
  });
  console.log( 
    'cascade object BEFORE enable',
    pcss._getAssetJson({
      _asset_type_ : '_cascade_',
      _asset_id_   : '_example001_'
    })
  );

  pcss._enableCascadeObj_({ _cascade_id_ : '_example001_' });
  console.log( 
    'cascade_obj AFTER enable',
    pcss._getAssetJson({
      _asset_type_ : '_cascade_',
      _asset_id_   : '_example001_'
    })
  );
  // End Create a cascade and enable it
};
// END pcss._example001_
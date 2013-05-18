/*
 * lang_en.js
 * English localization resources
 */

_.l.setLocale( 'en' );


_.l.set( 'data', {
   'category' : {
      'Sample' : '範例',
      'Example' : '例子',
      'Background' : '背景',
      'Class' : '職業',
      'Companion' : '伙伴',
      'Deity' : '神祇',
      'Disease' : '疾病',
      'EpicDestiny' : '史詩天命',
      'Feat' : '專長',
      'Glossary' : '詞目',
      'Item' : '裝備',
      'Monster' : '怪物',
      'ParagonPath' : '典範',
      'Poison' : '蠱毒',
      'Power' : '威能',
      'Race' : '種族',
      'Ritual' : '法式',
      'Terrain' : '地型',
      'Theme' : '主題',
      'Trap' : '陷阱'
   },
   'field' : {
      'Name' : '名稱',
      'Level' : '等級',
      'Category' : '類別',
      'Type' : '類型',
      "PowerSourceText" : '力量源',
      "RoleName" : '岡位',
      "KeyAbilities" : '主能力值',
      "GroupRole" : '地位',
      "Size" : '體型',
      "DescriptionAttribute" : '能力值',
      "ComponentCost" : '材料費',
      "Price" : '價格',
      "KeySkillDescription" : '主技能',
      "Prerequisite" : '前提要求',
      "Campaign" : '戰役',
      "Skills" : '技能',
      "Alignment" : '陣營',
      "Cost" : '花費',
      "Tier" : '層級',
      'ActionType': '動作',
      'ClassName': '職業',
      'SourceBook': '書目'
   }
});

_.l.set( 'error', {
   'updating_data' : 'Error when updating %1 of %2 (%3)',

   // 'no_cross_origin' : 'Cross Origin' // TODO: implement proper cross origin alert
   'ajax_error' : 'Cannot load content (%1) from %2',

   'com_file_security' : 'Cannot save data due to browser security settings. Go to Tools > Internet Options > Security > Custom Level. Enable "Initialize and script ActiveX controls not marked as safe".',
   'file_grant_permission' : 'You may see a prompt. Please grant us the permission update data files.',
   'file_no_api' : 'Only support saving in IE, because JavaScript has no standard for saving portable offline data.',
   'file_cannot_delete' : 'Cannot overwrite %1',

   'wrong_ext': 'Extended list different from raw list, please re-index from download screen: %1.'
});

_.l.set( 'gui', {
   'loading': 'Loading...',
   'loading1': 'Loading %1'
});

_.l.set( 'action.list', {
   title : "Browse Database",
   link_text : "Browse",

   btn_update : "Update Database",
   txt_search_placeholder : "Search text. e.g. ranger OR martial bonus -\"feat bonus\" ",
   chk_search_body : "Search content",
   a_all : "All Category",
   a_category : "%1 (%2)"
});

_.l.set( 'action.view', {
   a_back : "Back to list"
});

_.l.set( 'action.download', {
   title : "Update Database",
   link_text : "Update",
   
   paragraph : [
      "This browser script allows you to download and save compendium entries, then search and list them offline using advanced Google-like syntax.",
      "<b>Requires an active DDI subscription to download any data.</b> <a href='http://www.wizards.com/DnD/Article.aspx?x=dnd/updates' target='_blank'>Official Rules Updates</a>"
   ],
   btn_get_catalog : "Refresh catalog",
   btn_all_list : "Check all",
   btn_list : "Check",
   btn_update_changed : "Get %1 items",
   btn_update_all : "Get all items",
   btn_save : "Save",

   th_category : "Category",
   th_action : " ",
   th_changed : "Changed",
   th_new : "New",
   th_total : "Total",
   
   lbl_progress : "%1/%2",
   
   msg_login  : "A login window will pop up.  Please login and then close the login popup to resume download.  Or press Cancel to stop the update process."
});

_.l.set( 'action.about', {
   title : "Help",
   link_text : "Help",
   
   h_version_history : "Version History",
   
   h_history : "Product History",
   
   p_history : {
   },
   
   link_homepage : "Home"
});
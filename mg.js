window.onload = startAutomatic;

function startAutomatic()
{
$("#aaaaaaaaaaaaaaaaaa").html("<li> <span>­ ­</span> </li> <li> <button class=\"button-3\" onclick=\"alert(VERSION);\" style=\"\">VERSIÓN</button> </li>  <li> <span>­ ­</span> </li> <li> <button class=\"button-3\" onclick=\"effects_list_on();\" style=\"\">EFECTOS</button> </li>  <li> <span>­ ­</span> </li> <li> <button class=\"button-3\" onclick=\"controlBODYBGCOLOR_on();\" oncontextmenu=\"controlBODYBGCOLOR_hide_on();return false;\" style=\"\">COLOR</button> </li>  <li id=\"config_body_bgcolor_1_\" style=\"display: none;\"> <span>­ ­</span> </li> <li id=\"config_body_bgcolor_1\" style=\"display: none;\"> <button class=\"button-3\"> <input type=\"color\" value=\"#F9D611\" onclick=\"BODY_ENTER_BGCOLOR2_on();\" oninput=\"BODY_ENTER_BGCOLOR2_on();\" id=\"input_custom_body_bgcolor2\" spellcheck=\"false\" class=\"buttom_image_app_desktop_model\" style=\"padding: 0px; width: 16px; height: 16px; border-radius: 100px; border: #000000 1px solid; outline: 0px;\" /> </button> </li>  <li id=\"config_body_bgcolor_2_\" style=\"display: none;\"> <span>­ ­</span> </li> <li id=\"config_body_bgcolor_2\" style=\"display: none;\"> <input class=\"input\" onclick=\"BODY_ENTER_BGCOLOR_on();\" oninput=\"BODY_ENTER_BGCOLOR_on();\" id=\"input_custom_body_bgcolor\" value=\"#F9D611\" placeholder=\"\" onkeydown=\"if (event.keyCode == 13) document.getElementById('body_bgcolor_enter').click();\" style=\"text-transform: none; height: auto; width: 80px; min-width: 20px;\" /> </li>  <li id=\"config_body_bgcolor_3_\" style=\"display: none;\"> <span>­ ­</span> </li> <li id=\"config_body_bgcolor_3\" style=\"display: none;\"> <button class=\"button-3\" id=\"body_bgcolor_enter\" onclick=\"BODY_ENTER_BGCOLOR_on();\" style=\"display: none;\"> </button> </li>  <li> <span>­ ­</span> </li> <li> <button class=\"button-3\" onclick=\"controlMMOConfig_resolution_on();\" oncontextmenu=\"controlMMOConfig_resolution_hide_on();return false;\" style=\"\">RESOLUCIÓN</button> </li>  <li id=\"config_mmo_resolution_1_\" style=\"display: none;\"> <span>­ ­</span> </li> <li id=\"config_mmo_resolution_1\" style=\"display: none;\"> <input class=\"input\" oninput=\"MMO_ENTER_RESOLUTION_on();\" id=\"input_custom_mmo_width\" value=\"100%\" placeholder=\"\" onkeydown=\"if (event.keyCode == 13) document.getElementById('resolution_enter').click();\" style=\"text-transform: none; height: auto; width: 80px; min-width: 20px;\" /> </li>  <li id=\"config_mmo_resolution_2_\" style=\"display: none;\"> <span>­ ­</span> </li> <li id=\"config_mmo_resolution_2\" style=\"display: none;\"> <input class=\"input\" oninput=\"MMO_ENTER_RESOLUTION_on();\" id=\"input_custom_mmo_height\" value=\"88%\" placeholder=\"\" onkeydown=\"if (event.keyCode == 13) document.getElementById('resolution_enter').click();\" style=\"text-transform: none; height: auto; width: 80px; min-width: 20px;\" /> </li>  <li id=\"config_mmo_resolution_3_\" style=\"display: none;\"> <span>­ ­</span> </li> <li id=\"config_mmo_resolution_3\" style=\"display: none;\"> <button class=\"button-3\" id=\"resolution_enter\" onclick=\"MMO_ENTER_RESOLUTION_on();\" style=\"display: none;\"> </button> </li>  <li> <span>­ ­</span> </li> <li> <button class=\"button-3\" onclick=\"controlMMOConfigDev_on();\" oncontextmenu=\"controlMMOConfigDev_hide_on();return false;\" style=\"display: none;\">LISTA</button> </li>  <li id=\"config_mmo_dev_1_\" style=\"display: none;\"> <span>­ ­</span> </li> <li id=\"config_mmo_dev_1\" style=\"display: none;\"> <button class=\"button-3\" onclick=\"reload_MMO_on();\" style=\"\">01</button> </li>  <li id=\"config_mmo_dev_2_\" style=\"display: none;\"> <span>­ ­</span> </li> <li id=\"config_mmo_dev_2\" style=\"display: none;\"> <button class=\"button-3\" onclick=\"reload_MMO_BR_on();\" style=\"\">02</button> </li>  <li id=\"config_mmo_dev_3_\" style=\"display: none;\"> <span>­ ­</span> </li> <li id=\"config_mmo_dev_3\" style=\"display: none;\"> <button class=\"button-3\" onclick=\"reload_MMO_BEARKISMO_on();\" style=\"\">03</button> </li>  <li id=\"config_mmo_dev_4_\" style=\"display: none;\"> <span>­ ­</span> </li> <li id=\"config_mmo_dev_4\" style=\"display: none;\"> <button class=\"button-3\" onclick=\"reload_MMO_BEARKISMO_BR_on();\" style=\"\">04</button> </li>  <li> <span>­ ­</span> </li> <li> <input class=\"input\" id=\"input_custom_mmo\" value=\"MMO.swf\" placeholder=\"Ingresa nombre o link de un MMO...\" onkeydown=\"if (event.keyCode == 13) document.getElementById('button_custom_mmo').click();\" style=\"text-transform: none; width: 300px; height: auto;\" /> </li>  <li> <span>­ ­</span> </li> <li> <button class=\"button-3\" id=\"button_custom_mmo\" onclick=\"MMO_ENTER_on();\" style=\"\">CARGAR</button> </li>");
$("#input_custom_mmo").val("MMOLoader.swf");
$('#input_custom_mmo').hide();
$("#input_custom_mmo").attr("placeholder", "");
$("#input_custom_mmo").attr("spellcheck", false);
$("#input_custom_mmo").delay(1000);
$("#input_custom_mmo").show(1000);
$("#input_custom_mmo").val("MMO.swf");
// dataOptionAndUpdatesAllBanner_MESSAGE4_LOAD_on();
// dataOptionAndUpdatesAllBanner_MESSAGE_LOAD_on();
// $("#gui_message_menu").delay(10000);
$("#game_effects").html("<style>.data-option-menu, .option-data_menu { background-color: rgba(255, 255, 255, 0.75); padding: 10px; border-radius: 10px; border: 2px rgba(0, 0, 0, 0.25) solid;}  .data-notifications-and-updates_title_model { font-family: Arial Rounded MT Bold Regular; font-size: 20px; color: #000; element; outline:0px; }  .data-notifications-and-updates_model { font-family: Arial Rounded MT Bold Regular; font-size: 15px; color: #000; element; outline: 0px; overflow-y: scroll; }  .data-notifications-and-updates { text-align: center; outline: medium none; white-space: pre-wrap; word-wrap: break-word; min-width: 75px; min-height: 25px; max-width: 325px; max-height: 125px; }</style>");
$("#data_options_and_updates_text").attr("style", "overflow-x: hidden; overflow-y: auto;/* display: flex; *//* justify-content: center; */align-content: center;/* flex-direction: column; */");
$("#gameObj").html("<div id=\"MAGIC_MENU_BEARKISMO_SECRET\" style=\"position: fixed; width: 100%; height: 100%; right: 0px; bottom: 0px; background-color: #000000; display: none;\"><center><div><button class=\"button-3\" onclick=\"guiMessageMenu_on();\" style=\"\">CARTEL DE AVISO RÁPIDO CORTO</button></div><div><input class=\"input\" id=\"input_custom_gui_text\" value=\"\" placeholder=\"\" onkeydown=\"if (event.keyCode == 13) document.getElementById('button_custom_gui_text').click();\" style=\"text-transform: none; width: 300px; height: auto; display: inline-block;\" spellcheck=\"false\" /><button class=\"button-3\" id=\"button_custom_gui_text\" onclick=\"guiMessageMenu_INPUT();\" style=\"\">ENVIAR</button></div><div><button class=\"button-3\" onclick=\"dataOptionAndUpdatesAllBanner_Open_on();\" style=\"\">CARTEL DE NOVEDADES Y AVISOS</button></div><div><input class=\"input\" id=\"input_custom_data_options_and_updates_title\" value=\"\" placeholder=\"TÍTULO...\" style=\"text-transform: none; width: 300px; height: auto; display: inline-block;\" spellcheck=\"false\" /></div><div><textarea class=\"input\" id=\"input_custom_data_options_and_updates_text\" value=\"\" placeholder=\"MENSAJE...\" style=\"text-transform: none; width: 300px; height: auto; display: inline-block;\" spellcheck=\"false\"></textarea></div><div><input class=\"input\" id=\"input_custom_data_options_and_updates_confirm\" value=\"\" placeholder=\"NOMBRE DE CONFIRMACIÓN... (IMPORTANTE)\" style=\"text-transform: none; width: 300px; height: auto; display: inline-block;\" spellcheck=\"false\" /></div><div><input class=\"input\" id=\"input_custom_data_options_and_updates_confirm_2\" value=\"\" placeholder=\"NOMBRE DE CONFIRMACIÓN...\" style=\"text-transform: none; width: 300px; height: auto; display: inline-block;\" spellcheck=\"false\" /></div><div><input class=\"input\" id=\"input_custom_data_options_and_updates_confirm_3\" value=\"\" placeholder=\"NOMBRE DE CONFIRMACIÓN...\" style=\"text-transform: none; width: 300px; height: auto; display: inline-block;\" spellcheck=\"false\" /></div><div><input class=\"input\" id=\"input_custom_data_options_and_updates_confirm_4\" value=\"\" placeholder=\"NOMBRE DE CONFIRMACIÓN...\" style=\"text-transform: none; width: 300px; height: auto; display: inline-block;\" spellcheck=\"false\" /></div><div><input class=\"input\" id=\"input_custom_data_options_and_updates_confirm_5\" value=\"\" placeholder=\"NOMBRE DE CONFIRMACIÓN...\" style=\"text-transform: none; width: 300px; height: auto; display: inline-block;\" spellcheck=\"false\" /></div><div><button class=\"button-3\" onclick=\"dataOptionAndUpdatesAllBanner_INPUT();\" style=\"\">ENVIAR</button></div></center></div><embed name=\"gaturro\" id=\"MMO\" width=\"100%\" height=\"88%\" align=\"middle\" type=\"application/x-shockwave-flash\" allowscriptaccess=\"always\" bgcolor=\"#F9D611\" devicefont=\"false\" wmode=\"transparent\" pluginspage=\"//www.macromedia.com/go/getflashplayer\" src=\"\" flashvars=\"\"></embed><div class=\"gui-text-center-menu\" id=\"gui_message_menu\" style=\"position: fixed; left: 50%; transform: translateX(-50%); top: 5px; width: 50%;min-height: 24px;background-color: red; padding: 5px; border-radius: 30px; filter: drop-shadow(rgba(0, 0, 0, 0.8) 0px 0px 2.5px); display: none;\"><div class=\"gui-text-center-a\" align=\"center\" style=\"overflow: hidden; white-space: nowrap; text-overflow: ellipsis;\"><font class=\"gui-text-center-b\" face=\"Arial Rounded MT Bold Regular\" size=\"4\" color=\"WHITE\" style=\"font-family: Arial Rounded MT Bold Regular; font-size: 18px; color: #FFFFFF;\"><span id=\"guiText\">...</span></font></div></div><div id=\"TROLL_JAJAJAJA_PUTOOO\" style=\"position: fixed; width: 100%; height: 100%; right: 0px; bottom: 0px; background-color: #000000; display: none;\"></div>");
$("#TROLL_JAJAJAJA_PUTOOO").show();
$('#TROLL_JAJAJAJA_PUTOOO').delay(1500);
$("#TROLL_JAJAJAJA_PUTOOO").hide(1000);
// $("#TROLL_JAJAJAJA_PUTOOO").show();
// $('#TROLL_JAJAJAJA_PUTOOO').delay(15000);
// $("#TROLL_JAJAJAJA_PUTOOO").hide(1000);
$('#gui_message_menu').delay(15000);
guiMessageMenu("TODO CARGADO CORRECTAMENTE...");
// guiMessageMenu("¿ESTA VERSIÓN CUÁNDO CADUCA?");
dataOptionAndUpdatesAllBanner_MESSAGE_LOAD_on();
$('#data_options_and_updates_all').hide();
$('#data_options_and_updates_all').delay(20000);
$('#data_options_and_updates_all').show(10);
$("#MAGIC_MENU_BEARKISMO_SECRET").show(10);
$("#MAGIC_MENU_BEARKISMO_SECRET").hide(2000);

}

function guiMessageMenu_on()
{
$('#gui_message_menu').show(500);
$('#gui_message_menu').delay(3000);
$('#gui_message_menu').hide(500);
}

function guiMessageMenu(custom)
{
guiMessageMenu_on();
$("#guiText").text(custom);
}

function dataOptionAndUpdatesAllBanner(param1, param2, param3, param4, param5, param6, param7)
{
$('#data_options_and_updates_all').show();
$("#data_options_and_updates_title").text(param1);
$("#data_options_and_updates_text").html(param2);
$("#data_options_and_updates_confirm").html(param3);
$("#data_options_and_updates_confirm_2").html(param4);
$("#data_options_and_updates_confirm_3").html(param5);
$("#data_options_and_updates_confirm_4").html(param6);
$("#data_options_and_updates_confirm_5").html(param7);
}

function dataOptionAndUpdatesAllBannerFunctions(param1, param2, param3, param4, param5)
{
$('#data_options_and_updates_all').show();
$("#data_options_and_updates_confirm").attr("onclick", param1);
$("#data_options_and_updates_confirm_2").attr("onclick", param2);
$("#data_options_and_updates_confirm_3").attr("onclick", param3);
$("#data_options_and_updates_confirm_4").attr("onclick", param4);
$("#data_options_and_updates_confirm_5").attr("onclick", param5);
}

function guiMessageMenu_INPUT()
{
guiMessageMenu_on();
$("#guiText").text(""+$("#input_custom_gui_text").val()+"");
}

function dataOptionAndUpdatesAllBanner_INPUT()
{
$('#data_options_and_updates_all').show();
$("#data_options_and_updates_title").text(""+$("#input_custom_data_options_and_updates_title").val()+"");
$("#data_options_and_updates_text").html(""+$("#input_custom_data_options_and_updates_text").val()+"");
$("#data_options_and_updates_confirm").html(""+$("#input_custom_data_options_and_updates_confirm").val()+"");
$("#data_options_and_updates_confirm_2").html(""+$("#input_custom_data_options_and_updates_confirm_2").val()+"");
$("#data_options_and_updates_confirm_3").html(""+$("#input_custom_data_options_and_updates_confirm_3").val()+"");
$("#data_options_and_updates_confirm_4").html(""+$("#input_custom_data_options_and_updates_confirm_4").val()+"");
$("#data_options_and_updates_confirm_5").html(""+$("#input_custom_data_options_and_updates_confirm_5").val()+"");
}

function BODY_ENTER_BGCOLOR_on()
{
$("#all").css("background-color", " "+$("#input_custom_body_bgcolor").val()+" ");
}

function BODY_ENTER_BGCOLOR2_on()
{
$("#all").css("background-color", " "+$("#input_custom_body_bgcolor2").val()+" ");
}

function BODY_ENTER_BGCOLOR(bgcolor)
{
$("#all").css("background-color", bgcolor);
}

function controlBODYBGCOLOR_on()
{ 
$("#config_body_bgcolor_1_").show();
$("#config_body_bgcolor_1").show();
$("#config_body_bgcolor_2_").show();
$("#config_body_bgcolor_2").show();
$("#config_body_bgcolor_3_").show();
$("#config_body_bgcolor_3").show();

$('#config_body_bgcolor_1').hide();
}

function controlBODYBGCOLOR_hide_on()
{ 
$("#config_body_bgcolor_1_").hide();
$("#config_body_bgcolor_1").hide();
$("#config_body_bgcolor_2_").hide();
$("#config_body_bgcolor_2").hide();
$("#config_body_bgcolor_3_").hide();
$("#config_body_bgcolor_3").hide();
}

var VERSION = "MUNDO GATURRO - BEAR KISMO - DEMO 1";

// PERSONAJE ANIMADO A LA NORMALIDAD

function effectRestorationToNormality_on()
{
document.getElementById('gameObj').style.cssText = '';
}

// QUITA EL BRILLO AL PERSONAJE ANIMADO

function effectGlowRestorationToNormality_on()
{
document.getElementById('gameObj').style.cssText = '';
}

// PERSONAJE ANIMADO TRANSPARENTE A (custom)

function effectTransparent(value)
{
document.getElementById('gameObj').style.cssText = '-webkit-filter: opacity(' + value + '%); -webkit-transition: 1s;';
}

// PERSONAJE ANIMADO TRANSPARENTE A % 25

function effectTransparent_on()
{
document.getElementById('gameObj').style.cssText = '-webkit-filter: opacity(25%); -webkit-transition: 1s;';
}

// PERSONAJE ANIMADO TRANSPARENTE A 50 %

function effectAlpha_0_5_on()
{
document.getElementById('gameObj').style.cssText = '-webkit-filter: opacity(50%); -webkit-transition: 1s;';
}

// PERSONAJE ANIMADO TRANSPARENTE A 75 %

function effectAlpha_0_75_on()
{
document.getElementById('gameObj').style.cssText = '-webkit-filter: opacity(75%); -webkit-transition: 1s;';
}

// PERSONAJE ANIMADO TRANSPARENTE A 100 %

function effectAlpha_1_on()
{
document.getElementById('gameObj').style.cssText = '-webkit-filter: opacity(100%); -webkit-transition: 1s;';
}

// ¿DÓNDE ESTÁ EL PERSONAJE ANIMADO?, ¿SE HABRÁ VUELTO INVISIBLE?

function invisibilityRing_on()
{
document.getElementById('gameObj').style.cssText = '-webkit-filter: opacity(0%); -webkit-transition: 1s;';
}

// PERSONAJE ANIMADO EN ESCALAS DE GRISES

function effectRetro_on()
{
document.getElementById('gameObj').style.cssText = '-webkit-filter: grayscale(1);';
}

// PERSONAJE ANIMADO BORROSO, ¿NO PUEDES VERLO BIEN?

function effectFuzzy_on()
{
document.getElementById('gameObj').style.cssText = '-webkit-filter: blur(3px);';
}

// PERSONAJE ANIMADO TODO NEGRO

function effectAllBlack_on()
{
document.getElementById('gameObj').style.cssText = '-webkit-filter: brightness(0);';
}

// PERSONAJE ANIMADO TODO BLANCO

function effectAllWhite_on()
{
document.getElementById('gameObj').style.cssText = '-webkit-filter: brightness(0) invert(1);';
}

// ¿EL PERSONAJE ANIMADO ES PEQUEÑO COMO UN RATÓN?

function effectMiniBear_on()
{
document.getElementById('gameObj').style.cssText += '-webkit-transform: translate(7%, 7%) scale(0.7);';
}

// PERSONAJE ANIMADO CON SEPIA

function effectSepia_on()
{
document.getElementById('gameObj').style.cssText = '-webkit-filter: sepia(1);';
}

// EL PERSONAJE ES UN FANTASMA

function effectGhost_on()
{
document.getElementById('gameObj').style.cssText = '-webkit-filter: grayscale(1) opacity(75%) saturate(5) url(#effect_ghost);';
}

// ¿ES UN FANTASMA EL PERSONAJE? (VERSIÓN MEJORADA)

function effectGhostNew_on()
{
document.getElementById('gameObj').style.cssText = '-webkit-filter: grayscale(1) opacity(75%) saturate(5) url(#effect_ghost-new);';
}

// BRILLO DE PERSONAJE ANIMADO A BLANCO

function glowWhiteAll_on()
{
document.getElementById('animated-character-glow').style.cssText = '-webkit-filter: drop-shadow(0px 0px 10px #FFFFFF);';
}

// BRILLO DE PERSONAJE ANIMADO A NEGRO

function glowBlackAll_on()
{
document.getElementById('animated-character-glow').style.cssText = '-webkit-filter: drop-shadow(0px 0px 10px #000000);';
}

// EFECTO PERSONAJE TODO ROJO

function effectAllRed_on()
{
document.getElementById('gameObj').style.cssText = '-webkit-filter: grayscale(1) url(#effect_all-red);';
}

// EFECTO PERSONAJE TODO VERDE

function effectAllGreen_on()
{
document.getElementById('gameObj').style.cssText = '-webkit-filter: grayscale(1) url(#effect_all-green);';
}

// EFECTO PERSONAJE TODO AZUL

function effectAllBlue_on()
{
document.getElementById('gameObj').style.cssText = '-webkit-filter: grayscale(1) url(#effect_all-blue);';
}

// EFECTO PERSONAJE TODO AMARILLO

function effectAllYellow_on()
{
document.getElementById('gameObj').style.cssText = '-webkit-filter: grayscale(1) url(#effect_all-yellow);';
}

// EFECTO PERSONAJE TODO CYAN

function effectAllCyan_on()
{
document.getElementById('gameObj').style.cssText = '-webkit-filter: grayscale(1) url(#effect_all-cyan);';
}

// EFECTO PERSONAJE TODO MAGENTA

function effectAllMagenta_on()
{
document.getElementById('gameObj').style.cssText = '-webkit-filter: grayscale(1) url(#effect_all-magenta);';
}

// EL PERSONAJE A VECES PUEDE ESTAR SUCIO

function effectDirty_on()
{
document.getElementById('gameObj').style.webkitFilter = "url(#effect_dirty)";
}

// EL PERSONAJE QUEDA TODO QUEMADO

function effectBurned_on()
{
document.getElementById('gameObj').style.webkitFilter = "url(#effect_dirty) url(#effect_dirty)";
}

//MODIFICA EL ZOOM DEL PERSONAJE ANIMADO Y EL DIÁLOGO TAMBIÉN A 50%

function effectAnimatedCharacterZoom_0_5_on()
{
document.getElementById('gameObj').style.cssText = 'zoom: 50%;';
}

//MODIFICA EL ZOOM DEL PERSONAJE ANIMADO Y EL DIÁLOGO TAMBIÉN A 75% (RECOMENDADO PARA CUANDO TE QUEDES SIN ESPACIO)

function effectAnimatedCharacterZoom_0_75_on()
{
document.getElementById('gameObj').style.cssText = 'zoom: 75%;';
}

//MODIFICA EL ZOOM DEL PERSONAJE ANIMADO Y EL DIÁLOGO TAMBIÉN A 100% (PREDETERMINADO)

function effectAnimatedCharacterZoom_1_on()
{
document.getElementById('gameObj').style.cssText = 'zoom: 100%;';
}

//MODIFICA EL ZOOM DEL PERSONAJE ANIMADO Y EL DIÁLOGO TAMBIÉN A 125% (NO RECOMENDADO, PUEDES QUEDAR CON MENOS ESPACIO)

function effectAnimatedCharacterZoom_1_25_on()
{
document.getElementById('gameObj').style.cssText = 'zoom: 125%;';
}

//MODIFICA EL ZOOM DEL PERSONAJE ANIMADO Y EL DIÁLOGO TAMBIÉN A 150% (NO RECOMENDADO, PUEDES QUEDAR CON MUCHO MENOS ESPACIO)

function effectAnimatedCharacterZoom_1_5_on()
{
document.getElementById('gameObj').style.cssText = 'zoom: 150%;';
}

// EL PERSONAJE ANIMADO Y DIÁLOGO SON PEQUEÑOS COMO UNA HORMIGA (VERSIÓN EN ZOOM)

function effectZoom_0_25_on()
{
document.getElementById('gameObj').style.cssText = 'zoom: 25%;';
}

// EL PERSONAJE ANIMADO Y DIÁLOGO SON PEQUEÑOS COMO UN RATÓN BEBÉ (VERSIÓN EN ZOOM)

function effectZoom_0_5_on()
{
document.getElementById('gameObj').style.cssText = 'zoom: 50%;';
}

// EL PERSONAJE ANIMADO Y DIÁLOGO SON PEQUEÑOS COMO UN RATÓN (VERSIÓN EN ZOOM)

function effectZoom_0_7_on()
{
document.getElementById('gameObj').style.cssText = 'zoom: 70%;';
}

// EFECTO PERSONAJE TODO NARANJA

function effectAllOrange_on()
{
document.getElementById('gameObj').style.cssText = '-webkit-filter: grayscale(1) url(#effect_all-orange);';
}

// EFECTO PERSONAJE TODO PURPURA

function effectAllPurple_on()
{
document.getElementById('gameObj').style.cssText = '-webkit-filter: grayscale(1) url(#effect_all-purple);';
}

// EFECTO PERSONAJE SE CONVIERTE EN UN MONSTRUO MALO

function effectEvilMonster_on()
{
document.getElementById('gameObj').style.cssText = '-webkit-filter: grayscale(1) url(#effect_evil-monster);';
}

function pocimaNameTitle_0001_on()
{
document.getElementById('effect-name-title').innerHTML = "NORMAL: VUELVE AL PERSONAJE ANIMADO A LA NORMALIDAD.";
}

function pocimaNameTitle_0002_on()
{
document.getElementById('effect-name-title').innerHTML = "ESCALAS DE GRISES: TU PERSONAJE ANIMADO QUEDARÁ BLANCO Y NEGRO.";
}

function pocimaNameTitle_0003_on()
{
document.getElementById('effect-name-title').innerHTML = "TRANSPARENTE: TU PERSONAJE ANIMADO QUEDARÁ UN POCO VISIBLE.";
}

function pocimaNameTitle_0004_on()
{
document.getElementById('effect-name-title').innerHTML = "DIFUMINAR: TU PERSONAJE ANIMADO QUEDARÁ TODO DIFUMINADO.";
}

function pocimaNameTitle_0005_on()
{
document.getElementById('effect-name-title').innerHTML = "MINI: TU PERSONAJE ANIMADO QUEDA MÁS PEQUEÑO.";
}

function pocimaNameTitle_0006_on()
{
document.getElementById('effect-name-title').innerHTML = "FANTASMA: TU PERSONAJE ANIMADO SE CONVIERTE EN UN FANTASMA.";
}

function pocimaNameTitle_0007_on()
{
document.getElementById('effect-name-title').innerHTML = "TODO AMARILLO: TU PERSONAJE ANIMADO QUEDA TODO DE COLOR AMARILLO.";
}

function pocimaNameTitle_0008_on()
{
document.getElementById('effect-name-title').innerHTML = "QUEMADORA: TU PERSONAJE ANIMADO SE QUEMARÁ.";
}

function pocimaNameTitle_0009_on()
{
document.getElementById('effect-name-title').innerHTML = "SEPIA: TU PERSONAJE ANIMADO QUEDARÁ COLOR ESTILO UNA FOTO VIEJA.";
}

function pocimaNameTitle_0010_on()
{
document.getElementById('effect-name-title').innerHTML = "ANILLO DE INVISIBILIDAD: TU PERSONAJE ANIMADO QUEDA INVISIBLE.";
}

function reload_MMO_on()
{ 
document.getElementById('MMO').src = "MMO.swf";
}

function reload_MMO_BR_on()
{ 
document.getElementById('MMO').src = "MMO_BR.swf";
}

function reload_MMO_BEARKISMO_on()
{ 
document.getElementById('MMO').src = "MMO_BEARKISMO.swf";
}

function reload_MMO_BEARKISMO_BR_on()
{ 
document.getElementById('MMO').src = "MMO_BEARKISMO.swf";
}

function menu_on()
{ 
document.location.href='../index.html';
}

function dataOptionAndUpdatesAllBanner_Closed_on()
{
document.getElementById("data_options_and_updates_all").style.display = "none";
}

function dataOptionAndUpdatesAllBanner_NONE_on()
{
document.getElementById("data_options_and_updates_all").innerHTML += "";
document.getElementById('data_options_and_updates_title').innerHTML = "";
document.getElementById('data_options_and_updates_text').innerHTML = "";
document.getElementById('data_options_and_updates_confirm').innerHTML = "";
document.getElementById('data_options_and_updates_confirm_2').innerHTML = "";
document.getElementById('data_options_and_updates_confirm_3').innerHTML = "";
document.getElementById('data_options_and_updates_confirm_4').innerHTML = "";
document.getElementById('data_options_and_updates_confirm_5').innerHTML = "";
}

function effects_list_on()
{
dataOptionAndUpdatesAllBanner_NONE_on();
document.getElementById("data_options_and_updates_all").style.display = "";
document.getElementById('data_options_and_updates_title').innerHTML = "SELECCIONA UN EFECTO:";
document.getElementById('data_options_and_updates_text').innerHTML = "";
document.getElementById('data_options_and_updates_text').innerHTML += "<div ONCLICK='effectRetro_on()'>[RETRO]</div>";
document.getElementById('data_options_and_updates_text').innerHTML += "<div ONCLICK='effectSepia_on()'>[SEPIA]</div>";
document.getElementById('data_options_and_updates_text').innerHTML += "<div ONCLICK='effectAlpha_0_5_on()'>[OPA. 50%]</div>";
// document.getElementById('data_options_and_updates_text').innerHTML += "<div ONCLICK='effectGhostNew_on()'>[GHOST]</div>";
document.getElementById('data_options_and_updates_text').innerHTML += "<div ONCLICK='effectFuzzy_on()'>[FUZZY]</div>";
// document.getElementById('data_options_and_updates_text').innerHTML += "<div ONCLICK='effectAllRed_on()'>[RED]</div>";
// document.getElementById('data_options_and_updates_text').innerHTML += "<div ONCLICK='effectAllGreen_on()'>[GREEN]</div>";
// document.getElementById('data_options_and_updates_text').innerHTML += "<div ONCLICK='effectAllBlue_on()'>[BLUE]</div>";
// document.getElementById('data_options_and_updates_text').innerHTML += "<div ONCLICK='effectAllYellow_on()'>[YELLOW]</div>";
document.getElementById('data_options_and_updates_confirm').innerHTML = "<a>CERRAR</a>";
document.getElementById('data_options_and_updates_confirm_2').innerHTML = "<a onclick='effectRestorationToNormality_on();'>SIN EFECTOS</a>";
document.getElementById('data_options_and_updates_confirm_3').innerHTML = " ";
}

function dataOptionAndUpdatesAllBanner_MESSAGE_LOAD_on()
{
dataOptionAndUpdatesAllBanner_NONE_on();
document.getElementById("data_options_and_updates_all").style.display = "";
document.getElementById('data_options_and_updates_title').innerHTML = "...";
document.getElementById('data_options_and_updates_text').innerHTML = "...";
document.getElementById('data_options_and_updates_confirm').innerHTML = "<a></a>";
document.getElementById('data_options_and_updates_confirm_2').innerHTML = "<a onclick=\"dataOptionAndUpdatesAllBanner_MESSAGE_NAHUEL0002_LOAD_on();\">SIGUIENTE</a>";
document.getElementById('data_options_and_updates_confirm_3').innerHTML = " ";
dataOptionAndUpdatesAllBanner_MESSAGE_BOT_0007_LOAD_on();
// console.log("Probando que todo funcione bien...");
}

function dataOptionAndUpdatesAllBanner_MESSAGE_BOT_0007_LOAD_on()
{
dataOptionAndUpdatesAllBanner_NONE_on();
document.getElementById("data_options_and_updates_all").style.display = "";
document.getElementById('data_options_and_updates_title').innerHTML = "NOVEDAD:";
document.getElementById('data_options_and_updates_text').innerHTML = "LA BASE DE B. K. DE MUNDO GATURRO HA SIDO ACTUALIZADA.";
document.getElementById('data_options_and_updates_confirm').innerHTML = "<a>CERRAR</a>";
document.getElementById('data_options_and_updates_confirm_2').innerHTML = "";
document.getElementById('data_options_and_updates_confirm_3').innerHTML = "";
console.log("NOVEDAD: | LA BASE DE B. K. DE MUNDO GATURRO HA SIDO ACTUALIZADA. | (MENSAJE ESCRITO POR KISMO)");
}

function dataOptionAndUpdatesAllBanner_MESSAGE_BOT_0006_LOAD_on()
{
dataOptionAndUpdatesAllBanner_NONE_on();
document.getElementById("data_options_and_updates_all").style.display = "";
document.getElementById('data_options_and_updates_title').innerHTML = "NOVEDAD:";
document.getElementById('data_options_and_updates_text').innerHTML = "LA BASE DE B. K. DE MUNDO GATURRO HA SIDO ACTUALIZADA.";
document.getElementById('data_options_and_updates_confirm').innerHTML = "<a>CERRAR</a>";
document.getElementById('data_options_and_updates_confirm_2').innerHTML = "<a onclick=\"effects_list_on();\">VER EFECTOS</a>";
document.getElementById('data_options_and_updates_confirm_3').innerHTML = "<a onclick=\"controlBODYBGCOLOR_on();\">VER COLOR</a>";
console.log("NOVEDAD: | LA BASE DE B. K. DE MUNDO GATURRO HA SIDO ACTUALIZADA. | (MENSAJE ESCRITO POR KISMO)");
}

function dataOptionAndUpdatesAllBanner_MESSAGE_BOT_0005_LOAD_on()
{
dataOptionAndUpdatesAllBanner_NONE_on();
document.getElementById("data_options_and_updates_all").style.display = "";
document.getElementById('data_options_and_updates_title').innerHTML = "INFORME:";
document.getElementById('data_options_and_updates_text').innerHTML = "ESTA VERSIÓN ES MUY ANTIGUA.";
document.getElementById('data_options_and_updates_confirm').innerHTML = "<a>CERRAR</a>";
document.getElementById('data_options_and_updates_confirm_2').innerHTML = "";
document.getElementById('data_options_and_updates_confirm_3').innerHTML = " ";
console.log("... | ... | (MENSAJE ESCRITO POR KISMO)");
}

function dataOptionAndUpdatesAllBanner_MESSAGE_BOT_0004_LOAD_on()
{
dataOptionAndUpdatesAllBanner_NONE_on();
document.getElementById("data_options_and_updates_all").style.display = "";
document.getElementById('data_options_and_updates_title').innerHTML = "DE FLER";
document.getElementById('data_options_and_updates_text').innerHTML = "Nahuel trolo de mierda dame bola o voy a tu casa y te cago a piñas<br/><br/>Joda te amo mucho";
document.getElementById('data_options_and_updates_confirm').innerHTML = "<a></a>";
document.getElementById('data_options_and_updates_confirm_2').innerHTML = "<a onclick=\"dataOptionAndUpdatesAllBanner_MESSAGE_BOT_0003_LOAD_on();\">SIGUIENTE</a>";
document.getElementById('data_options_and_updates_confirm_3').innerHTML = " ";
console.log("... | ... | (MENSAJE ESCRITO POR FLER)");
}

function dataOptionAndUpdatesAllBanner_MESSAGE_BOT_0003_LOAD_on()
{
dataOptionAndUpdatesAllBanner_NONE_on();
document.getElementById("data_options_and_updates_all").style.display = "";
document.getElementById('data_options_and_updates_title').innerHTML = "¿¿¿IDEAS???";
document.getElementById('data_options_and_updates_text').innerHTML = "ALGUNA IDEA PARA QUE PUEDA HACER EN LA CONSOLA O ALGO??? YA NO TENGO IDEAS DE QUE PODER HACER DE NUEVO. (NUEVOS COMBOS O ALGO, LO QUE SEA)";
document.getElementById('data_options_and_updates_confirm').innerHTML = "<a></a>";
document.getElementById('data_options_and_updates_confirm_2').innerHTML = "<a onclick=\"dataOptionAndUpdatesAllBanner_MESSAGE_BOT_0002_LOAD_on();\">SIGUIENTE</a>";
document.getElementById('data_options_and_updates_confirm_3').innerHTML = " ";
console.log("¿¿¿IDEAS??? | ALGUNA IDEA PARA QUE PUEDA HACER EN LA CONSOLA O ALGO??? YA NO TENGO IDEAS DE QUE PODER HACER DE NUEVO. (NUEVOS COMBOS O ALGO, LO QUE SEA) | (MENSAJE ESCRITO POR KISMO)");
}

function dataOptionAndUpdatesAllBanner_MESSAGE_BOT_0002_LOAD_on()
{
dataOptionAndUpdatesAllBanner_NONE_on();
document.getElementById("data_options_and_updates_all").style.display = "";
document.getElementById('data_options_and_updates_title').innerHTML = "...";
document.getElementById('data_options_and_updates_text').innerHTML = "Malmark se la come";
document.getElementById('data_options_and_updates_confirm').innerHTML = "<a></a>";
document.getElementById('data_options_and_updates_confirm_2').innerHTML = "<a onclick=\"dataOptionAndUpdatesAllBanner_MESSAGE_BOT_0001_LOAD_on();\">SIGUIENTE</a>";
document.getElementById('data_options_and_updates_confirm_3').innerHTML = " ";
console.log("... | Malmark se la come | (MENSAJE ESCRITO POR NAHUEL)");
}

function dataOptionAndUpdatesAllBanner_MESSAGE_BOT_0001_LOAD_on()
{
dataOptionAndUpdatesAllBanner_NONE_on();
document.getElementById("data_options_and_updates_all").style.display = "";
document.getElementById('data_options_and_updates_title').innerHTML = "...";
document.getElementById('data_options_and_updates_text').innerHTML = "Mora se la come";
document.getElementById('data_options_and_updates_confirm').innerHTML = "<a></a>";
document.getElementById('data_options_and_updates_confirm_2').innerHTML = "<a onclick=\"dataOptionAndUpdatesAllBanner_MESSAGE_BOT_0000_LOAD_on();\">SIGUIENTE</a>";
document.getElementById('data_options_and_updates_confirm_3').innerHTML = " ";
console.log("... | Mora se la come | (MENSAJE ESCRITO POR NAHUEL)");
}

function dataOptionAndUpdatesAllBanner_MESSAGE_BOT_0000_LOAD_on()
{
dataOptionAndUpdatesAllBanner_NONE_on();
document.getElementById("data_options_and_updates_all").style.display = "";
document.getElementById('data_options_and_updates_title').innerHTML = "LEEEEEEEEEEEEER";
document.getElementById('data_options_and_updates_text').innerHTML = "Hola Nahuel te gusta la paja??? Verdad que si???????????";
document.getElementById('data_options_and_updates_confirm').innerHTML = "<a>CONFIRMAR Y CERRAR</a>";
document.getElementById('data_options_and_updates_confirm_2').innerHTML = "<a onclick=\"dataOptionAndUpdatesAllBanner_MESSAGE2_LOAD_on();\">SIGUIENTE</a>";
document.getElementById('data_options_and_updates_confirm_3').innerHTML = " ";
console.log("LEEEEEEEEEEEEER | Hola Nahuel te gusta la paja??? Verdad que si??????????? | (MENSAJE ESCRITO POR KISMO)");
}

function dataOptionAndUpdatesAllBanner_MESSAGE2_LOAD_on()
{
dataOptionAndUpdatesAllBanner_NONE_on();
document.getElementById("data_options_and_updates_all").style.display = "";
document.getElementById('data_options_and_updates_title').innerHTML = "ESO NO ERA, ESTO ES:";
document.getElementById('data_options_and_updates_text').innerHTML = "Próximamente actualización de consolas nuevas, de la base de MG y del MG para sacar conexión.";
document.getElementById('data_options_and_updates_confirm').innerHTML = "<a>CERRAR</a>";
document.getElementById('data_options_and_updates_confirm_2').innerHTML = " ";
document.getElementById('data_options_and_updates_confirm_3').innerHTML = " ";
console.log("ESO NO ERA, ESTO ES: | Próximamente actualización de consolas nuevas, de la base de MG y del MG para sacar conexión. | (MENSAJE ESCRITO POR KISMO)");
}

function dataOptionAndUpdatesAllBanner_MESSAGE3_LOAD_on()
{
dataOptionAndUpdatesAllBanner_NONE_on();
document.getElementById("data_options_and_updates_all").style.display = "";
document.getElementById('data_options_and_updates_title').innerHTML = "SECRETOS:";
document.getElementById('data_options_and_updates_text').innerHTML = "EXISTEN FUNCIONES SECRETAS QUE EN ESTA VERSIÓN NO SE USAN AÚN... PERO ALGUNAS SIRVEN USANDO LA CONSOLA DEL NAVEGADOR.";
document.getElementById('data_options_and_updates_confirm').innerHTML = "<a>CERRAR</a>";
document.getElementById('data_options_and_updates_confirm_2').innerHTML = " ";
document.getElementById('data_options_and_updates_confirm_3').innerHTML = " ";
}

function dataOptionAndUpdatesAllBanner_MESSAGE4_LOAD_on()
{
dataOptionAndUpdatesAllBanner_NONE_on();
document.getElementById("data_options_and_updates_all").style.display = "";
document.getElementById('data_options_and_updates_title').innerHTML = "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";
document.getElementById('data_options_and_updates_text').innerHTML = "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";
document.getElementById('data_options_and_updates_confirm').innerHTML = "<a>CONFIRMAR Y CERRAR</a>";
document.getElementById('data_options_and_updates_confirm_2').innerHTML = "<a onclick=\"dataOptionAndUpdatesAllBanner_MESSAGE2_LOAD_on();\">SIGUIENTE</a>";
document.getElementById('data_options_and_updates_confirm_3').innerHTML = " ";
}

function none_MMO_all_on()
{
$("#MMO").attr("src", "");
}

function controlMMOConfig_resolution_on()
{ 
$("#config_mmo_resolution_1_").show();
$("#config_mmo_resolution_1").show();
$("#config_mmo_resolution_2_").show();
$("#config_mmo_resolution_2").show();
}

function controlMMOConfigDev_on()
{ 
$("#config_mmo_dev_1_").show();
$("#config_mmo_dev_1").show();
$("#config_mmo_dev_2_").show();
$("#config_mmo_dev_2").show();
$("#config_mmo_dev_3_").show();
$("#config_mmo_dev_3").show();
$("#config_mmo_dev_4_").show();
$("#config_mmo_dev_4").show();
}

function controlMMOConfig_resolution_hide_on()
{ 
$("#config_mmo_resolution_1_").hide();
$("#config_mmo_resolution_1").hide();
$("#config_mmo_resolution_2_").hide();
$("#config_mmo_resolution_2").hide();
}

function controlMMOConfigDev_hide_on()
{ 
$("#config_mmo_dev_1_").hide();
$("#config_mmo_dev_1").hide();
$("#config_mmo_dev_2_").hide();
$("#config_mmo_dev_2").hide();
$("#config_mmo_dev_3_").hide();
$("#config_mmo_dev_3").hide();
$("#config_mmo_dev_4_").hide();
$("#config_mmo_dev_4").hide();
}

function MMO_ENTER_RESOLUTION_on()
{
$("#MMO").attr("width", ""+$("#input_custom_mmo_width").val()+"");
$("#MMO").attr("height", ""+$("#input_custom_mmo_height").val()+"");
}


function MMO_ENTER_on()
{
$("#MMO").attr("src", ""+$("#input_custom_mmo").val()+"");
}

document.addEventListener('keyup', event => {
  if (event.ctrlKey && event.keyCode === 122) {
    $("#TROLL_JAJAJAJA_PUTOOO").toggle();
  }
}, false)

document.addEventListener('keyup', event => {
  if (event.ctrlKey && event.keyCode === 123) {
    $("#MAGIC_MENU_BEARKISMO_SECRET").toggle();
  }
}, false)

import { set_canvas, set_debug_mode, start, ArtistElement, instance_create, instance_destroy } from './artist.js';
import { draw_rectangle, draw_text_transformed, draw_set_font, sprite_load, draw_sprite, draw_line, draw_text, draw_circle, draw_set_alpha, draw_set_color, color, draw_sprite_ext } from './draw.js';
import { set_fullscreen } from './device.js';
import { point_direction, lengthdir_x, lengthdir_y, random_range, irandom_range, ease_in_out_expo } from './math.js';

const canvas = document.getElementById('canvas');

try {
set_canvas(canvas);
set_fullscreen(true);
set_debug_mode(true);

start();
setTimeout(() => {
  instance_create(MousePointer, 0, 0, 1);
}, 0);

} catch(err) {
  alert(err);
}

// 마우스 좌표를 알기 위한 목적으로 만든 클래스
class MousePointer extends ArtistElement {
  draw() {
    if (window.variables.mouse_click === true) {
      draw_set_alpha(0.6);
      draw_set_color(color.black);
      draw_circle(
        window.variables.mouse_x,
        window.variables.mouse_y,
        3,
        true);
      
      draw_line(
        0,
        window.variables.mouse_y,
        window.variables.display_width,
        window.variables.mouse_y);
        
      draw_line(
        window.variables.mouse_x,
        0,
        window.variables.mouse_x,
        window.variables.display_height);
       draw_set_alpha(1);
       draw_set_color(color.black);
    }
  }
}
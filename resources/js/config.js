//#CodeStart 
window.variables = {
    canvas: undefined,
        
    debug_mode: false,
    fps: 0,
    fps_interval: 60,
    fullscreen: false,
    delta_time: 0,
    display_width: 0,
    display_height: 0,
    display_ratio: 0,
  
    update_queue: [],
    late_update_queue: [],
    draw_queue: [],
    
    instances: {},

    sprite: {},
    
    keyboard_check: false,
    keyboard_code: -1,

    mouse_pressed: false,
    mouse_click: false,
    mouse_x: 0,
    mouse_y: 0,
    display_mouse_x: 0,
    display_mouse_y: 0,

    draw_color: 'black',
    draw_alpha: 1,
    draw_font: 'Arial',
    draw_font_size: 15,
    draw_filter: 'none',
};

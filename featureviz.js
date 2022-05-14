//liberated and altered with love from MADBUTTER/Emmanuel Jourdan https://cycling74.com/forums/mgraphics-gradients-more-color-stops

autowatch = 1;

function list()
{
	var a = arrayfromargs(arguments);
	//post("received list " + a + "\n");
	myval = a;
	makegradient(myval);
}

function makegradient(myval) {
	//make 40px x 8px rectangle
	outlet(0, "rectangle", 0., 0., 320, 240);
	//create linear gradient with 5 influence points x0, y0, x1, y1, x2, y2, x3, y3, x4, y4
	outlet(0, "pattern_create_linear", "grad", 0, 240, 320, 240);
	//add color stop colors
	outlet(0, "pattern_add_color_stop_rgba", "grad", 0.0, 0.8, 0.8, 0.8, myval[0]);
	outlet(0, "pattern_add_color_stop_rgba", "grad", 0.15, 0.6, 0.6, 0.6, myval[1]);
	outlet(0, "pattern_add_color_stop_rgba", "grad", 0.3, 0.4, 0.4, .4, myval[2]);
	outlet(0, "pattern_add_color_stop_rgba", "grad", 0.45, .9, 0.9, 0.9, myval[3]);
	outlet(0, "pattern_add_color_stop_rgba", "grad", 0.6, .3, 0.3, 0.3, myval[4]);
	outlet(0, "pattern_add_color_stop_rgba", "grad", 0.75, .2, 0.2, 0.2, myval[5]);
	outlet(0, "pattern_add_color_stop_rgba", "grad", 0.88, .1, 0.1, 0.1, myval[6]);
	outlet(0, "pattern_add_color_stop_rgba", "grad", 0.95, .2, 0.2, 0.2, myval[7]);
	outlet(0, "pattern_add_color_stop_rgba", "grad", 1., 0.4, 0.4, .4, myval[8]);
	//do the fill
	outlet(0, "set_source", "grad");
	outlet(0, "fill");
	//show it
	outlet(0, "bang");
}

#version 330 core

in vec2 vert_texcoord;

layout (location = 0) out vec4 frag_color;

uniform sampler2D Image;

uniform float exponent;

void main() 
{
	// TODO
	frag_color = vec4(0, 0, 0, 1);
}
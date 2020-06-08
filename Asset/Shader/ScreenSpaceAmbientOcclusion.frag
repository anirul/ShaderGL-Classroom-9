#version 330 core

in vec2 vert_texcoord;

layout (location = 0) out vec4 frag_color;

uniform sampler2D ViewPosition;
uniform sampler2D ViewNormal;
uniform sampler2D Noise;

uniform vec3 kernel[64];
uniform vec2 noise_scale;
uniform mat4 projection;

const int kernel_size = 64;
const float radius = 1;
const float bias = 0.0025;

void main()
{
	// TODO
    frag_color = vec4(0, 0, 0, 1);
}

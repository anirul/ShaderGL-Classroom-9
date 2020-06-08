#version 330 core

in vec2 vert_texcoord;
in vec3 vert_position;
in vec3 vert_normal;

layout (location = 0) out vec4 frag_position;
layout (location = 1) out vec4 frag_normal;

void main()
{    
    // TODO
    frag_position = vec4(0, 0, 0, 1);
    frag_normal = vec4(0, 0, 0, 1);
}
# Simple Assembler Interpreter
We want to create a simple interpreter of assembler which will support the following instructions:

# Registers and Constants
Register names are alphabetical (letters only). Constants are always integers (positive or negative).

Also, every inc/dec/jnz on a register will always be preceeded by a mov on the register first, so you don't need to worry about uninitialized registers.

# Implementation
The interpreter is a function that takes an input list of Strings with the sequence of the program instructions and will execute them. The program ends when there are no more instructions to execute, then it returns a dictionary with the contents of the registers.

# Level One - Basic Instructions
Assembler Instructions
mov x y - copies y (either a constant value or the content of a register) into register x

inc x - increases the content of the register x by one

dec x - decreases the content of the register x by one

jnz x y - jumps to an instruction y steps away (positive means forward, negative means backward, y can be a register or a constant), but only if x (a constant or a register) is not zero

# Level Two - Arithmetic Support
Add support for the following instructions.

add x y - add the content of the register x with y (either an integer or the value of a register) and stores the result in x (i.e. register[x] += y).

sub x y - subtract y (either an integer or the value of a register) from the register x and stores the result in x (i.e. register[x] -= y).

mul x y - same with multiply

div x y - same with integer division

#Comment - If an instructions starts with a #-sign, ignore this instruction

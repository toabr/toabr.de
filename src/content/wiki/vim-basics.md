---  
nid: 174  
title: "Vim - Basics"  
created: "2023-02-12T02:32:13+00:00"  
changed: "2023-02-12T02:32:13+00:00"  
promote: true  
sticky: false  
---  

### Get Help

`:h[elp]` \- read the friendly manual!  
`:vert h _topic_` \- vertical help split


# build in tutorial
vimtutor

### Open a file


vim existingfile.txt
vim newfile.txt
`:e[dit] {file}` \- open a file  
`:vie[w]` \- set read only  
`:ene[w]` \- edit a new, unnamed file

`:pw[d]` \- print working directory  
`:cd` \- change working directory  
`:cd -` \- back to last directory

### Write and quit

`:q[uit]` \- quit current window  
`:w[rite]` \- write buffer to file  
`:sav[e]` \- save buffer as  
`:wq` \- write and close current window  
same as `:x` and ZZ

`:q!` \- force quit dont write ZQ

<https://vim-jp.org/vimdoc-en/editing.html#write-quit>

### Vim's Command mode

: \- enter cmdline _mode_  
TAB \- command completion  
`:history` \- command history  
q : \- open command _window_

<https://vim-jp.org/vimdoc-en/usr%5F20.html>

### Suspend and resume

CTRL-Z \- suspend vim `:sus[pend]`  
( $ `jobs` to list, $ `fg` to bring vim back)  
`:!{cmd}` \- execute a shell cmd  
`:r[ead] !{cmd}` \- dump cmd output  
`:shell` \- start a new shell  
`'0` \- get back where you left Vim (`:marks`)  
`:ol[dfiles]` \- list recently edited files  
`:bro[wse] ol[dfiles]` \- :`ol` with _prompt_

<https://vim-jp.org/vimdoc-en/usr%5F21.html>

### Windows

> A _window_ is a viewport onto a buffer. You can use multiple windows on one buffer, or several windows on different buffers.

<https://vim-jp.org/vimdoc-en/windows.html>

### CTRL-W commands

**Opening and closing:**

s \- split current window `:vs[plit]`  
v \- split vertical `:sp[lit]`  
n \- new empty file `:new` / `:vne[w]`  
q \- quit current window `:q[uit]`  
o \- close all other `:on[ly]`

**Moving around:**

ARROWS \- move between windows  
p \- move to previous window  
w \- next window  
r / R \- rotate windows  
x \- swap windows

**Resize:**

\= \- size all windows evenly  
\- \- decrease hight `:res[ize] -N`  
+ \- increase height `:res[ize] +N`  
\_ \- max heigt  
< \- decrease width `:vert res -N`  
\> \- increase witdh `:vert res +N`  
| \- max width

### Buffer

> A _buffer_ is a file loaded into memory for editing. The original file remains unchanged until you write the buffer to the file.

<https://vim-jp.org/vimdoc-en/windows.html#buffer-hidden>

**Commands:**

`**:ls**` \- list all buffers  
`**:bd**[elete] [N]` \- delete buffer \[N\]  
`**:b**[uffer] [N]` \- open buffer \[N\]   
`**:sb**[uffer] [N]` \- split open buffer \[N\]  
`**:bn**[ext]` \- next buffer  
`**:bp**[revious]` \- previous buffer  
`**:ba**[ll]` \- open all buffer in windows

### Viminfo

> Each time you exit Vim it will store this information in a file, the viminfo  
> file. When Vim starts again, the viminfo file is read and the information  
> restored.

The viminfo file is designed to store status information:

* Command-line and Search pattern history
* Text in registers
* Marks for various files
* The buffer list
* Global variables

<https://vim-jp.org/vimdoc-en/usr%5F21.html#21.3> 

### Sessions

> A _Session_ keeps the Views for all windows, plus the global settings.

`**:mks**[ession][!] [file]` \- create a session file, \[!\] overrides  
`**:so**[ource] [file]` \- restore session from file  
startup with session `$ vim -S mySession.vim`

<https://vim-jp.org/vimdoc-en/usr%5F21.html#21.4>

### Views

> A _View_ is a collection of settings that apply to one window.

`**:mkvie**[w] [file]` \- create a view of the current _window_  
:loadview - ...

<https://vim-jp.org/vimdoc-en/usr%5F21.html#21.5>
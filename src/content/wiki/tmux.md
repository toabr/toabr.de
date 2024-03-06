---
nid: 36
title: tmux - terminal multiplexer
created: 2017-12-31T12:38:55+00:00
changed: 2017-12-31T12:38:55+00:00
promote: true
sticky: false
tags: [apache,linux,docker,javascript,shell,cheatsheet,blender,bootstrap,compose,css,debugging,git,drush,drupal,html,msql,nextcloud,node,npm,parcel,php,prometheus,react,ssh,sync,virtualbox,vscode,webpack,wordpress,xcp-ng]
---

## Commands

Commands are either executed via terminal `tmux <command>`  
or via the _tmux prompt_ <kbd>Ctrl-b</kbd> +<kbd>:</kbd>

`no command` \# Short-cut for new-session

`ls` \# List sessions

`new` \# New unnamed session  
`new -s <name>` \# New named session

`a` \# Attach to last session  
`a -t <session>` \# Attach to specific session

`detach` \# Detach from client

`kill-session` \# Kill current session  
`kill-session -t <session>` \# Kill specific session

`kill-server` \# Kill the tmux server

## Keybindings

Shortcuts start with the _prefix key_ <kbd>Ctrl-b</kbd> \+

### Session

<kbd>$</kbd> Rename current session  
<kbd>L</kbd> Switch attached client back to last session  
<kbd>s</kbd> Select new session for attached client interactively

### Windows

<kbd>c</kbd> Create new window  
<kbd>&</kbd> Kill current window  
<kbd>,</kbd> Rename current window  
<kbd>0</kbd> to <kbd>9</kbd> Select windows 0 to 9  
<kbd>w</kbd> Choose window interactively  
<kbd>p</kbd> Previous window  
<kbd>n</kbd> Next window  
<kbd>f</kbd> Find window

### Panes

<kbd>%</kbd> Split pane vertical\
<kbd>"</kbd> Split pane horizontal\
<kbd>x</kbd> Kill current pane  \
(or simply type `exit` / press <kbd>Ctrl-d</kbd> )\
<kbd>q</kbd> Briefly display pane indexes\
<kbd>;</kbd> Move to previously active pane\
<kbd>Arrow</kbd> Change pane respectively\
<kbd>o</kbd> Select next pane\
<kbd>Crtl-o</kbd> Rotate panes forwards\
<kbd>Alt-o</kbd> Rotate panes backwards\
<kbd>{</kbd> Swap current with previous pane\
<kbd>}</kbd> Swap current with next pane\
<kbd>z</kbd> Toggle pane zoom\
<kbd>!</kbd> Break current pane out of window\
<kbd>Alt-1</kbd> to <kbd>Alt-5</kbd> Arrange panes in one of the five layouts\
<kbd>Ctrl-Arrow</kbd> Resize pane by one step\
<kbd>Alt-Arrow</kbd> Resize pane by five steps\

### Copy/Paste  
  
<kbd>#</kbd> List all paste buffers  
<kbd>[</kbd> Enter copy mode to copy text or view the history  
<kbd>]</kbd> Paste the most recently copied buffer of text  
<kbd>Page Up</kbd> Enter copy mode and scroll one page up  
<kbd>\=</kbd> Choose which buffer to paste interactively from a list  
<kbd>-</kbd> Delete the most recently copied buffer of text  
  
### Miscellaneous  
  
<kbd>Ctrl-z</kbd> Suspend the tmux client  
<kbd>r</kbd> Force redraw of the attached client  
<kbd>t</kbd> Show the time  
<kbd>~</kbd> Show previous messages from tmux, if any  
<kbd>f</kbd> Prompt to search for text in open windows  
<kbd>d</kbd> Detach the current client  
<kbd>D</kbd> Choose a client to detach  
<kbd>?</kbd> List all key bindings  
<kbd>:</kbd> Enter the tmux command prompt  
  
### Resources  

- <https://leanpub.com/the-tao-of-tmux/read#appendix-cheatsheets>

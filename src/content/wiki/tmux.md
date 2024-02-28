---  
nid: 36  
title: "tmux"  
created: "2017-12-31T12:38:55+00:00"  
changed: "2017-12-31T12:38:55+00:00"  
promote: true  
sticky: false  
---  

## Commands

Commands are either executed via terminal `tmux <command>`  
or via the _tmux prompt_ Ctrl-b +: 

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

Shortcuts start with the _prefix key_ Ctrl-b \+ 

### Session

$ Rename current session

L Switch attached client back to last session

s Select new session for attached client interactively

### Windows

c Create new window

& Kill current window

, Rename current window

0 to 9 Select windows 0 to 9

w Choose window interactively

p Previous window

n Next window

f Find window

### Panes

% Split pane vertical

" Split pane horizontal

x Kill current pane  
(or simply type `exit` / press Ctrl-d )

q Briefly display pane indexes

; Move to previously active pane

Arrow Change pane respectively

o Select next pane

Crtl-o Rotate panes forwards

Alt-o Rotate panes backwards

{ Swap current with previous pane

} Swap current with next pane

z Toggle pane zoom

! Break current pane out of window

Alt-1 to Alt-5 Arrange panes in one of the five layouts

Ctrl-Arrow Resize pane by one step

Alt-Arrow Resize pane by five steps

### Copy/Paste

# List all paste buffers

\[ Enter copy mode to copy text or view the history

\] Paste the most recently copied buffer of text

Page Up Enter copy mode and scroll one page up

\= Choose which buffer to paste interactively from a list

\- Delete the most recently copied buffer of text

### Miscellaneous

Ctrl-z Suspend the tmux client

r Force redraw of the attached client

t Show the time

\~ Show previous messages from tmux, if any

f Prompt to search for text in open windows

d Detach the current client

D Choose a client to detach

? List all key bindings

: Enter the tmux command prompt

### Resources

* <https://leanpub.com/the-tao-of-tmux/read#appendix-cheatsheets>
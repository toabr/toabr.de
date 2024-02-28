---  
nid: 173  
title: "Netrw - Vim's builtin File Explorer"  
created: "2023-02-11T01:18:28+00:00"  
changed: "2023-02-11T01:18:28+00:00"  
promote: true  
sticky: false  
---  

## Usage

### Open Vim in Netrw


# open current directory
vim .

# open in path
vim /path/to/dir
### Commands

* `:E[xplore]` \- will make Netrw occupy the entire window
* `:Hex[plore]` \- horizontal split and show the directory in the lower window
* `:Vex[plore]` \- vertical split and show the directory on the left side
* `:Sex[plore]` \- horizontal split and show the directory in the upper window
* `:Tex[plore]` \- new tabpage to show the directory
* `:Lex[plore]` \- like Vexplore, but will open a file on the window where we called the command. Also works to toggles Netrw

Variants with a _!_ will show the directory on the opposite side `:Lex!`

* Open with specific width `:Vex 25`

### Shortcuts

v \- open file in split  
P \- open file in previous window  
p \- open preview window  
CTRL-W Z \- close preview window  
d \- create directory  
% \- create file  
R \- rename file  
D \- delete file or empty directory

mt \- assign _target_ used by move & copy  
mf \- mark file or directory  
mc \- copy marked files in target  
mm \- move marked files to target  
mx \- run external command on marked files

I \- toggle banner  
gh \- toggle hidden files  
s \- change sort order  
i \- toggle view

x \- open in default editor

## Settings

### Configs


" helps to avoid move files error
let g:netrw_keepdir=0
" change size of Netrw window
let g:netrw_winsize=30
" hide banner
let g:netrw_banner=0
" enable recursive copy of directories
let g:netrw_localcopydircmd='cp -r'
" tree-view
let g:netrw_liststyle = 3
" use the previous window to open file
let g:netrw_browse_split = 4
### Keymaps


nnoremap <leader>dd :Lexplore %:p:h<CR>
nnoremap <Leader>da :Lexplore<CR>

" wipeout netrw buffers when they are hidden
augroup AutoDeleteNetrwHiddenBuffers
  au!
  au FileType netrw setlocal bufhidden=wipe
augroup end

### Credits

* <https://vonheikemen.github.io/devlog/tools/using-netrw-vim-builtin-file-explorer/>
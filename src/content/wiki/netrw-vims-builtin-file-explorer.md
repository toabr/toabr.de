---  
nid: 173  
title: Netrw - Vim's builtin File Explorer  
created: 2023-02-11T01:18:28+00:00  
changed: 2023-02-11T01:18:28+00:00  
promote: true  
sticky: false  
tags: [netrw,vim,cheatsheet]
---  

## Usage

### Open Vim in Netrw

```sh
# open current directory
vim .

# open in path
vim /path/to/dir

```
### Commands

* `:E[xplore]` - will make Netrw occupy the entire window
* `:Hex[plore]` - horizontal split and show the directory in the lower window
* `:Vex[plore]` - vertical split and show the directory on the left side
* `:Sex[plore]` - horizontal split and show the directory in the upper window
* `:Tex[plore]` - new tabpage to show the directory
* `:Lex[plore]` - like Vexplore, but will open a file on the window where we called the command. Also works to toggles Netrw

Variants with a _!_ will show the directory on the opposite side `:Lex!`

* Open with specific width `:Vex 25`

### Shortcuts

<kbd>v</kbd> - open file in split  
<kbd>P</kbd> - open file in previous window  
<kbd>p</kbd> - open preview window  
<kbd>CTRL-W Z</kbd> - close preview window  
<kbd>d</kbd> - create directory  
<kbd>%</kbd> - create file  
<kbd>R</kbd> - rename file  
<kbd>D</kbd> - delete file or empty directory

<kbd>mt</kbd> - assign _target_ used by move & copy  
<kbd>mf</kbd> - mark file or directory  
<kbd>mc</kbd> - copy marked files in target  
<kbd>mm</kbd> - move marked files to target  
<kbd>mx</kbd> - run external command on marked files

<kbd>I</kbd> - toggle banner  
<kbd>gh</kbd> - toggle hidden files  
<kbd>s</kbd> - change sort order  
<kbd>i</kbd> - toggle view

<kbd>x</kbd> - open in default editor

## Settings

### Configs

```vim
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

```
### Keymaps

```vim
nnoremap <leader>dd :Lexplore %:p:h<CR>
nnoremap <Leader>da :Lexplore<CR>

```
```vim
" wipeout netrw buffers when they are hidden
augroup AutoDeleteNetrwHiddenBuffers
  au!
  au FileType netrw setlocal bufhidden=wipe
augroup end
```
### Credits

* <https://vonheikemen.github.io/devlog/tools/using-netrw-vim-builtin-file-explorer/>

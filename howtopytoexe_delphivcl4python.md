# DelphiVCL4Python
## How To PY-TO-EXE

จากคำแนะนำของผู้พัฒนา  

```
https://github.com/Embarcadero/DelphiVCL4Python/blob/main/samples/Installer/readme.md  
```

### ตัวอย่างสคริปที่สามารถ สร้างไฟล์ EXE แบบ ไฟล์เดียว  <br/>
### Example script that can create a single EXE file.  <br/>

> onefile EXE
> icon 
> run at `.tmp` folder

```python
pyinstaller 
--noconsole 
--onefile 
--windowed 
--icon "PATH_TO_FILE_ICON.ico" 
--runtime-tmpdir ".tmp" 
--add-data "PATH_TO_FOLDER/Lib/site-packages/delphivcl;delphivcl" 
--add-data "PATH_TO_FOLDER/Lib/site-packages;site-packages" 
--add-data "PATH_TO_FILE_FORM.pydfm;."
"PATH_TO_FILE_MAIN.py"
```

### ตัวอย่างไฟล์ สเปค  <br/>
### Example file specs  <br/>

```python
# -*- mode: python ; coding: utf-8 -*-


a = Analysis(
    ['main.py'],
    pathex=[],
    binaries=[],
    datas=[('../anaconda3/envs/env311/Lib/site-packages/delphivcl', 'delphivcl'),
           ('../anaconda3/envs/env311/Lib/site-packages', 'site-packages'),
           ('main.pydfm', '.')],
    hiddenimports=[],
    hookspath=[],
    hooksconfig={},
    runtime_hooks=[],
    excludes=[],
    noarchive=False,
)
pyz = PYZ(a.pure)

exe = EXE(
    pyz,
    a.scripts,
    a.binaries,
    a.datas,
    [],
    name='main',
    debug=False,
    bootloader_ignore_signals=False,
    strip=False,
    upx=True,
    upx_exclude=[],
    runtime_tmpdir='.tmp',
    console=False,
    disable_windowed_traceback=False,
    argv_emulation=False,
    target_arch=None,
    codesign_identity=None,
    entitlements_file=None,
    icon=['reader.ico'],
)
```

$p = "C:\Users\Shahe\Documents\artisansourdough\src\routes\wholesale.tsx"
Add-Type -TypeDefinition @"
using System;
using System.Runtime.InteropServices;
public static class X {
    [DllImport("kernel32.dll", SetLastError=true, CharSet=CharSet.Unicode)]
    public static extern IntPtr CreateFile(string lpFileName, uint dwDesiredAccess, uint dwShareMode,
        IntPtr lpSecurityAttributes, uint dwCreationDisposition, uint dwFlagsAndAttributes, IntPtr hTemplateFile);
    [DllImport("kernel32.dll", SetLastError=true)]
    public static extern bool CloseHandle(IntPtr hObject);
}
"@
$h = [X]::CreateFile($p, 0x100000, 0x7, [IntPtr]::Zero, 3, 0x400000, [IntPtr]::Zero)
Write-Host "handle=$h"
if ($h -eq [IntPtr]::Zero -or $h -eq -1) {
    Write-Host "failed" [System.Runtime.InteropServices.Marshal]::GetLastWin32Error()
} else {
    [X]::CloseHandle($h)
    Write-Host "close-ok"
    [System.IO.File]::Delete($p)
    Write-Host "exists=" ([System.IO.File]::Exists($p))
}

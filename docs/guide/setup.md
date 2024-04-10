# Installing Dependencies

To start developing mods, we will need to ensure we have a few things first:

- An IDE or code editor such as Visual Studio or Visual Studio Code.
- .NET SDK (version 6 or newer).
- A fresh and updated install of the base game.

We will discuss these requirements in detail below.

## Picking your IDE

While the recommended option is [Visual Studio](https://visualstudio.microsoft.com/), it is by no means a lightweight install and takes up a lot of space. Your computer may not be able to handle it if it is not up to date. Typically, while running this program it takes up a few gigabytes of RAM.

[Visual Studio Code](https://code.visualstudio.com/) is a much more lightweight alternative which also supports .NET and C# with extensions, but may take more time to set up and develop mods.

::: tip
These two are not the only options, however native C# support in a free developer environment is harder to find. If you are using another option, make sure it works with C# and dotnet!
:::

## .NET SDK

[.NET SDK](https://dotnet.microsoft.com/) is a software development kit that allows you to compile code written in C# and use different .NET libraries.

Install the SDK by doing the following:

1. Go to the .NET downloads page.
2. Select the latest recommended version for your operating system.
3. Download and run the installer

After running the installer, ensure that you have done everything correctly by opening a command line prompt and running the command:

```sh
dotnet --list-sdks
```

If everything has been successfully installed, you will see an output such as:

`8.0.203 [C:\Program Files\dotnet\sdk]`

If you see that the command is not recognised, try restarting or installing again.

## Updated Install of Town of Salem 2

To interface with the games' code, we need a reference to the code itself. Fortunately, the games' code is very easy to access and reference.

1. Find your games install directory
   - On Windows, this will be at `C:\Program Files (x86)\Steam\steamapps\common\Town of Salem 2` by default. If your Steam game directory is in another drive, it will be there.
2. Navigate to `TownOfSalem2_Data/Managed`
3. The games code will be in a file called `Assembly-CSharp.dll`.

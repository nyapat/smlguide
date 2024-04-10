# Compiling Your Project

Now that you have created your project files, open them up in your editor and have a look at the important ones;

- src/
  - A folder that contains your mod's source code. You will notice there is already a file called `program.cs` for you.
- resources/
  - A folder that contains metadata and external resources to load into the game.
  - modinfo.json
    - Identifies your mod to Salem Mod Loader. This file will have preset information, but change it to correctly describe your mod.
- project.csproj
  - A file that contains metadata of your project. You can open this in **Visual Studio** and automatically import your project.

## modinfo.json

Make sure to change only the _values_ of this file. Don't change the names listed on the first line of these descriptions;

- `HarmonyId` should be in the format `your_name.mod_name`
- `DisplayName` will show your mod's name ingame to users.
- `Authors` should contain everyone who has committed to your mod. Put yourself in there!
- `Description` should describe your mod so that users browsing Salem Mod Loader can understand what it does.
- `Version` should be the version of your mod. You will need to change this every time you upload your mod to the browser.
- `RequiredMods` should be a list of Harmony Ids of any mods your mod depends on. Don't worry about this for now.
- `Settings` is a powerful field for getting user choices from in-game. We will use this later.

Here is the `modinfo.json` of **Chat Emojis**, to better understand what you can change, for now.

```json
{
  "HarmonyId": "pat.chatemojis",
  "DisplayName": "Chat Emojis",
  "Authors": ["pat"],
  "Description": "Express yourself with emojis! Emojis will be added to the keyword mention system, start by typing ':'.",
  "Version": "1.0.0",
  "RequiredMods": [],
  "Settings": {
    "CheckboxSettings": [
      {
        "Name": "Force Line Crunch",
        "SettingID": "pat.linecrunch",
        "Description": "Disables emojis from overflowing to the line above and creating line spacing",
        "DefaultValue": false,
        "AvailableInGame": false
      }
    ]
  }
}
```

## Compiling The Mod

### src/program.cs

When you first open this file, your editor may show you that there are compile errors. This is because we need to reference Salem Mod Loader as it handles loading of mods.

### Building

Open a terminal in your project (**CTRL + `**) and type the following command to build your project;

```sh
dotnet build
```

### libs/

Our template has automatically included a way to grab the reference of Salem Mod Loader for us. You will see a new folder called `libs` with a few new files:

- Assembly-CSharp.dll
  - This contains the games' code
- SalemModLoader.dll
  - The code of SalemModLoader, so that we can load mods in-game.
- UnityEngine.CoreModule.dll
- UnityEngine.dll
  - These two files are from Unity, so that we can edit engine behaviour that may not necessarily be from the games' code.

### bin/

Open your project in a file explorer. There is another new folder called `bin`. This is the folder for compiled code and resources from our mod.

If you look through the folder, you will see `Debug/netstandard21/` and a few project files in here. The important one is named `project.dll` (or what your project is called).

## Loading The Mod

To load this mod in Salem Mod Loader now, we will have to copy it into our Salem Mod Loader mods folder. Luckily, this has already been done for us by our template!

Open the game (or reopen if it was open when you ran `dotnet build`), and manage your mods. You should see a new mod like below.

![The mod shown in Salem Mod Loader manage tab](salemmodloader-manage-tab.png)

## Adding a Thumbnail

To add your own thumbnail to your mod, open your **resources** folder, and include a file named `thumbnail.png`.

Open your project's `csproj` file and find the line below:

```xml
<EmbeddedResource Include="resources\modinfo.json" />
```

Add a line below to let your project know to compile the thumbnail into the final dll:

```xml
<EmbeddedResource Include="resources\thumbnail.png" />
```

Build your mod again by using `dotnet build` in the terminal, and reload your game. You should now see your new thumbnail in the manage tab!

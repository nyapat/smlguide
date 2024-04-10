# Creating Your Project

Now that we have set up our development tools, we will create our project for our first mod.

To do this, we will use a command line tool to copy files from a template from us.

Begin by opening a command line and typing;

```sh
dotnet new install VoidBehemoth.SMLTemplate
```

After installing the template, navigate to a folder that you wish to create a project in. You can do this with `cd folder` or simply by right clicking while in a folder and clicking 'Open in Terminal.'

Then, copy your Steam library path and run the command;

```sh
dotnet new smlmod -s "C:\Program Files (x86)\Steam"
```

This will create the project in your current directory. Ensure that everything has copied successfully by looking at the output of `dir` or `ls` and you should see the following file tree;

```sh
└─ project
   ├─ .gitignore
   ├─ obj
   ├─ resources
   ├─ src
   ├─ SteamLibrary.targets
   └─ project.csproj
```

If you see the files in your folder, you have successfully completed the first step of creating your mod! :rocket:

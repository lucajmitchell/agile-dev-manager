import {
  PackagePlus,
  GitMerge,
  CalendarCheck,
  ListTodo,
  LayoutDashboard,
  UserRoundCheck,
  PackageOpen,
  UserRound,
  ChevronsUpDown,
  Settings,
  House,
  LogOut,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

const sidebarGroup1 = [
  {
    title: "Create Project",
    url: "#",
    icon: PackagePlus,
  },
  {
    title: "Join Project",
    url: "#",
    icon: GitMerge,
  },
];

const sidebarGroup2 = [
  {
    title: "Home",
    url: "#",
    icon: House,
  },
  {
    title: "Backlog",
    url: "#",
    icon: CalendarCheck,
  },
  {
    title: "Current Sprint",
    url: "#",
    icon: ListTodo,
  },
  {
    title: "Your tasks",
    url: "#",
    icon: UserRoundCheck,
  },
  {
    title: "Dashboard",
    url: "#",
    icon: LayoutDashboard,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="p-0">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <SidebarMenuButton asChild>
                    <a href="#" className="h-auto">
                      <PackageOpen />
                      <div className="w-full flex justify-between items-center">
                        <div className="text-nowrap">Project title</div>
                        <ChevronsUpDown size="14" />
                      </div>
                    </a>
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <span>Example project 1</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span>Example project 2</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span>Example project 3</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarHeader>
      <SidebarSeparator />
      <SidebarContent className="gap-0">
        <SidebarGroup>
          <SidebarGroupLabel>New project</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarGroup1.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span className="text-nowrap">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarSeparator />
        <SidebarGroup>
          <SidebarGroupLabel>Manage project</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarGroup2.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span className="text-nowrap">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-0">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton asChild>
                    <a href="#" className="h-auto">
                      <UserRound />
                      <div className="w-full flex justify-between items-center">
                        <div className="text-nowrap">Name</div>
                        <ChevronsUpDown size="14" />
                      </div>
                    </a>
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <span className="flex gap-2 items-center">
                      <LogOut size="14" /> Log out
                    </span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarFooter>
    </Sidebar>
  );
}

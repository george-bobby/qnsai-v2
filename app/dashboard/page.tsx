import { UserDetails } from "../components/user-details";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import Footer from '../components/Footer';


export default async function DashboardPage() {
  return (
    <>
      <main className="max-w-[75rem] w-full mx-auto">
        <div className="grid grid-cols-[1fr_20.5rem] gap-10 pb-10">
          <div>
            <header className="flex items-center justify-between w-full h-16 gap-4">
        
              <div className="flex items-center gap-2">
                <OrganizationSwitcher
                  appearance={{
                    elements: {
                      organizationPreviewAvatarBox: "size-6",
                    },
                  }}
                />
                <UserButton
                  afterSignOutUrl="/"
                  appearance={{
                    elements: {
                      userButtonAvatarBox: "size-6",
                    },
                  }}
                />
              </div>
            </header>
            <UserDetails />
          </div>
          <div className="pt-[3.5rem]">
          </div>
        </div>
      </main>
      <Footer /> 
    </>
  );
}

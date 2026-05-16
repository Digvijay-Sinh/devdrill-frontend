import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/typography";

export function JoinPage() {
  return (
    <main className="w-full max-w-4xl relative z-10">
      <div className="text-center mb-lg">
        <Text type="display-hero" className="text-primary mb-sm">
          DevDrill
        </Text>
        <Text type="body-lg" className="text-primary-fixed-dim">
          Level up your coding skills. One boss battle at a time.
        </Text>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
        {/* Left Card: Join Game */}
        <Card className="items-center text-center p-lg group">
          <div className="absolute inset-0 border-2 border-secondary-fixed opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
          
          <div className="w-20 h-20 mb-sm">
            <img
              alt="Pixel Art Avatar"
              className="w-full h-full object-cover rounded-sm border-2 border-primary-fixed-dim"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_olYWN-G8FNIaauRBKVo2WAANSyiHkhtLb4rD6hwxWgviYDoDOb7Z2B6lt1lj81Bd132GxKaUufENjkSnYiZvlPWQHr5vJ7jKpUzr_27Yd_3KKqLpKYNk7fOPwh3T0BO_g7BzyThpfgMhsa-Pgd3fCxDlMBxLE-m0IVuUeBlWjy2Nj9XuEfO0jUwR1DdcZ4a4Wv5hvoJ0-j1NHEWfe8eFfozza4p47Xh2OhAnfW7QnVsH2smf6rQMS5BuV7jum60Cd4FUliHXxO3J"
            />
          </div>
          
          <Text type="headline-md" className="mb-xs">
            Join Game
          </Text>
          <Text type="body-md" className="text-on-surface-variant mb-lg">
            Enter the invite code from your host.
          </Text>
          
          <div className="w-full flex flex-col gap-md">
            <div className="relative w-full">
              <span className="absolute left-md top-1/2 -translate-y-1/2 font-code-sm text-code-sm text-secondary-fixed">
                &gt;
              </span>
              <input
                className="w-full bg-surface-container border border-outline-variant rounded-md py-sm pl-xl pr-md font-code-sm text-code-sm text-on-surface focus:outline-none focus:border-secondary-fixed focus:ring-1 focus:ring-secondary-fixed uppercase placeholder:text-outline-variant"
                placeholder="ENTER_CODE"
                type="text"
              />
            </div>
            <Button variant="default" className="w-full">
              ENTER DUNGEON
            </Button>
          </div>
        </Card>

        {/* Right Card: Create Game */}
        <Card className="bg-surface-container border-outline-variant items-center justify-center p-lg text-center">
          <span
            className="material-symbols-outlined text-display-hero text-outline-variant mb-sm"
          >
            sports_esports
          </span>
          
          <Text type="headline-md" className="mb-xs">
            Host a Drill
          </Text>
          <Text type="body-md" className="text-on-surface-variant mb-lg">
            Create lobbies, track leaderboards, and manage your custom quizzes.
          </Text>
          
          <Button variant="outline" className="w-full">
            <span className="material-symbols-outlined">
              login
            </span>
            HOST SIGN IN
          </Button>
        </Card>
      </div>
    </main>
  );
}


export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex view">
            <div className="dleft">
                <h1>Main</h1>
            </div>
            <div className="dright">
                {children}
            </div>
        </div>
    );
}

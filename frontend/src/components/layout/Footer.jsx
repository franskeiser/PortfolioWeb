const Footer = () => {
    return (
        <footer className="pt-12 border-t border-slate-200 dark:border-slate-800 text-center text-slate-500 text-sm">
            <p>© 2025 Franz Calumpit. Built with precision and passion.</p>
            <div className="mt-4 flex justify-center gap-6">
                <a className="hover:text-primary transition-colors" href="https://github.com/franskeiser" target="_blank">
                    GitHub
                </a>
                <a className="hover:text-primary transition-colors" href="https://www.facebook.com/franz.pascua.5/" target="_blank">
                    Facebook
                </a>
                <a className="hover:text-primary transition-colors" href="https://www.linkedin.com/in/franz-calumpit-861715228/" target="_blank">
                    LinkedIn
                </a>
            </div>
        </footer>
    );
};

export default Footer;

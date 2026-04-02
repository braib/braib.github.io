#!/usr/bin/env python3
import os

# ===== CONFIG =====
ROOT_DIR = "."            # directory to scan
OUTPUT_FILE = "all_files_dump2.txt"

# Files/folders to ignore
IGNORE_DIRS = {
    ".git",
    "node_modules",
    "__pycache__",
    ".venv",
    "build",
    "dist"
}

IGNORE_EXTENSIONS = {
    ".pyc",
    ".py",
    ".txt",
    ".md",
    ".o",
    ".so",
    ".exe",
    ".dll",
    ".zip",
    ".tar",
    ".gz",
    ".png",
    ".jpg",
    ".jpeg",
    ".pdf",
    ".env",
    ".gitignore",
    ".json",
}

MAX_FILE_SIZE_MB = 5  # skip very large files


def should_skip_file(path):
    ext = os.path.splitext(path)[1].lower()
    if ext in IGNORE_EXTENSIONS:
        return True

    try:
        size_mb = os.path.getsize(path) / (1024 * 1024)
        if size_mb > MAX_FILE_SIZE_MB:
            return True
    except OSError:
        return True

    return False


def dump_files():
    with open(OUTPUT_FILE, "w", encoding="utf-8", errors="replace") as out:
        for root, dirs, files in os.walk(ROOT_DIR):
            dirs[:] = [d for d in dirs if d not in IGNORE_DIRS]

            for file in files:
                full_path = os.path.join(root, file)

                if should_skip_file(full_path):
                    continue

                out.write("\n" + "=" * 80 + "\n")
                out.write(f"FILE: {full_path}\n")
                out.write("=" * 80 + "\n\n")

                try:
                    with open(full_path, "r", encoding="utf-8", errors="replace") as f:
                        out.write(f.read())
                except Exception as e:
                    out.write(f"[ERROR READING FILE: {e}]\n")

                out.write("\n\n")

    print(f"✅ Dump complete → {OUTPUT_FILE}")


if __name__ == "__main__":
    dump_files()

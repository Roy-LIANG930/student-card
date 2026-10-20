"""Extract the photographed ink without redrawing the signature.

Run with the bundled Python/Pillow runtime when replacing the source scan.
"""

from pathlib import Path

from PIL import Image, ImageFilter


ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "assets" / "photo-source.jpg"
OUTPUT = ROOT / "assets" / "signature.png"

# Coordinates are in the original, sideways 1080 x 1920 photograph.
LEFT, TOP, WIDTH, HEIGHT = 210, 690, 105, 270

with Image.open(SOURCE) as photograph:
    scan = photograph.crop((LEFT, TOP, LEFT + WIDTH, TOP + HEIGHT))

# Pillow uses positive angles for counter-clockwise rotation. This makes the
# sideways card upright without mirroring or redrawing any strokes.
scan = scan.rotate(90, expand=True).convert("L")
background = scan.filter(ImageFilter.GaussianBlur(radius=9))

ink = Image.new("RGBA", scan.size)
scan_pixels = scan.load()
background_pixels = background.load()
ink_pixels = ink.load()

for y in range(scan.height):
    for x in range(scan.width):
        # Local background removal keeps the fine, gray pen strokes while
        # discarding the paper color and most JPEG/photographic noise.
        darkness = background_pixels[x, y] - scan_pixels[x, y]
        opacity = max(0, min(255, round((darkness - 4) * 10)))
        ink_pixels[x, y] = (35, 34, 34, opacity)

# A larger transparent asset renders more smoothly at small card sizes.
ink = ink.resize((scan.width * 4, scan.height * 4), Image.Resampling.LANCZOS)
ink.save(OUTPUT, optimize=True)
print(OUTPUT)

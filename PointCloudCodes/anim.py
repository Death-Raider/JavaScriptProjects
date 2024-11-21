import moviepy.video.io.ImageSequenceClip

image_files = []
fps = 1
for a in range(12):
    for b in range(a+1,12):
        image_files.append(f"Images/pog_{a},{b}.png")
print(image_files,len(image_files))
clip = moviepy.video.io.ImageSequenceClip.ImageSequenceClip(image_files, fps=fps)
clip.write_videofile(f'max_quad.mp4')

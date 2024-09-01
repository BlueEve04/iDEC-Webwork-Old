import os
import re
import sys
sys.stdout.reconfigure(encoding='utf-8')
# 指定文件目录
directory = './frames'  # 将此处替换为你的文件目录

# 遍历目录中的所有文件
for filename in os.listdir(directory):
    # 匹配类似 "合成 1_00015.png" 的文件名，并提取数字部分
    match = re.match(r'合成 \d_(\d+)\.png', filename)
    if match:
        # 获取数字部分
        new_name = match.group(1) + '.png'
        # 构建完整的源路径和目标路径
        src = os.path.join(directory, filename)
        dst = os.path.join(directory, new_name)
        # 重命名文件
        os.rename(src, dst)
        print(f'Renamed: {filename} -> {new_name}')

print("文件重命名完成。")
# 遍历目录中的所有文件
for filename in os.listdir(directory):
    # 分离文件名和扩展名
    name, ext = os.path.splitext(filename)
    # 去除文件名开头的所有0
    new_name = name.lstrip('0') + ext
    # 构建完整的源路径和目标路径
    src = os.path.join(directory, filename)
    dst = os.path.join(directory, new_name)
    # 重命名文件
    os.rename(src, dst)
    print(f'Renamed: {filename} -> {new_name}')

print("文件重命名完成2。")
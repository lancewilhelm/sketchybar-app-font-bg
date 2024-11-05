local app_icons = dofile("./app_icons.lua")

local output_dir = "../"

-- os.execute("mkdir -p " .. output_dir)

for displayName, fileName in pairs(app_icons) do
	local filePath = output_dir .. fileName

	local file = io.open(filePath, "w")
	if file then
		displayName = '"' .. displayName .. '"'
		file:write(displayName)
		file:close()
		print("Created file: " .. filePath)
	else
		print("Failed to create file: " .. filePath)
	end
end

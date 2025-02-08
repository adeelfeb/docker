### **Creating a Batch Apache (HTTPD) Image in Docker Using the Command Line**  

If you want to **create a batch HTTPD (Apache) Docker image**, follow these steps:  

---

### **Step 1: Pull the Apache HTTPD Image**  
Run the following command to pull the latest Apache HTTPD image:  

```sh
docker pull httpd:latest
```

---

### **Step 2: Create and Run an HTTPD Container**  
Now, create a container from the pulled image and run it:  

```sh
docker run -d --name my-httpd -p 8080:80 httpd
```
🔹 **Explanation:**  
- `-d` → Run container in the background (detached mode).  
- `--name my-httpd` → Name the container "my-httpd".  
- `-p 8080:80` → Map **port 80** inside the container to **port 8080** on your machine.  
- `httpd` → Use the **Apache HTTPD image**.  

Now, your Apache server is running! ✅  

---

### **Step 3: Verify That HTTPD is Running**  
Check if the container is running using:  

```sh
docker ps
```
You should see **"my-httpd"** in the list.

---

### **Step 4: Open Apache in a Browser**  
Now, open your browser and go to:  
🔗 **http://localhost:8080**  

You should see the **Apache default page**.

---

### **Step 5: Serve Custom Files from Your Host**  
To serve your own HTML files, mount a local directory to the Apache web server:  

```sh
docker run -d --name my-httpd -p 8080:80 -v $(pwd)/my-website:/usr/local/apache2/htdocs httpd
```
🔹 **Explanation:**  
- `-v $(pwd)/my-website:/usr/local/apache2/htdocs` → Mount **your local "my-website" folder** to Apache’s web root.

Now, any files in `my-website/` will be served by Apache! 🎉

---

### **Step 6: Stop and Remove the HTTPD Container (Optional)**  
If you want to stop and delete the container:  

```sh
docker stop my-httpd
docker rm my-httpd
```

If you also want to remove the image:  
```sh
docker rmi httpd
```

---

### **Summary of Commands**
| Command | Description |
|---------|------------|
| `docker pull httpd` | Pulls the Apache HTTPD image |
| `docker run -d --name my-httpd -p 8080:80 httpd` | Runs Apache in a container |
| `docker ps` | Lists running containers |
| `docker stop my-httpd` | Stops the HTTPD container |
| `docker rm my-httpd` | Removes the container |
| `docker rmi httpd` | Removes the image |

---

### **Basic Docker Commands for Managing Images & Containers** 🚀  

#### **1️⃣ Create a Docker Image**
First, create a **Dockerfile** (a blueprint for an image). Example for a Node.js app:  

```dockerfile
# Use a base image
FROM node:latest 

# Set working directory
WORKDIR /app 

# Copy files
COPY . .

# Install dependencies
RUN npm install 

# Expose a port
EXPOSE 3000 

# Command to run the app
CMD ["node", "server.js"]
```

Now, build an image from this Dockerfile:  
```sh
docker build -t my-app .
```
📌 `-t my-app` → Tags the image as "my-app"  
📌 `.` → Tells Docker to use the **current directory**  

---

#### **2️⃣ Create & Run a Container from the Image**
Run a container from the created image:  
```sh
docker run -dit --name my-container -p 3000:3000 my-app
```
📌 `-d` → Runs container in **detached mode** (in the background)  
📌 `-i` → Keeps STDIN open (for interactive use)  
📌 `-t` → Allocates a **terminal**  
📌 `--name my-container` → Names the container  
📌 `-p 3000:3000` → Maps **host port 3000** to **container port 3000**  
📌 `my-app` → The image name  

---

#### **3️⃣ List Running Containers**
```sh
docker ps
```
📌 Shows **only running containers**  

For **all containers (including stopped ones):**  
```sh
docker ps -a
```

---

#### **4️⃣ Stop a Running Container**
```sh
docker stop my-container
```
📌 `my-container` → Name of the container  

---

#### **5️⃣ Restart a Stopped Container**
```sh
docker start my-container
```

---

#### **6️⃣ Delete a Container**
```sh
docker rm my-container
```
📌 If the container is running, **stop it first** (`docker stop my-container`)  

---

#### **7️⃣ Delete an Image**
```sh
docker rmi my-app
```
📌 If a container is using this image, remove the container **before deleting the image**  

---

#### **8️⃣ View All Images**
```sh
docker images
```
📌 Lists all images on the system  

---

#### **9️⃣ View Logs of a Running Container**
```sh
docker logs my-container
```
📌 Useful for **debugging errors**  

---

#### **🔟 Execute a Command Inside a Running Container**
```sh
docker exec -it my-container bash
```
📌 `bash` → Opens a **terminal inside the container**  

---

### **💡 Summary of Key Commands**
| **Task**            | **Command** |
|---------------------|------------|
| Build an Image | `docker build -t my-app .` |
| Run a Container | `docker run -dit --name my-container -p 3000:3000 my-app` |
| View Running Containers | `docker ps` |
| View All Containers | `docker ps -a` |
| Stop a Container | `docker stop my-container` |
| Restart a Container | `docker start my-container` |
| Delete a Container | `docker rm my-container` |
| Delete an Image | `docker rmi my-app` |
| List Images | `docker images` |
| View Logs | `docker logs my-container` |
| Open Terminal Inside Container | `docker exec -it my-container bash` |


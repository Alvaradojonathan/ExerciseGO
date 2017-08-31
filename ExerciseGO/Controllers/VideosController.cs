using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using ExerciseGO.Models;

namespace ExerciseGO.Controllers
{
    public class VideosController : Controller
    {
        private ExerciseGOEntities db = new ExerciseGOEntities();

        // GET: Videos
        public ActionResult Index()
        {
            var videos = db.Videos.Include(v => v.Game).Include(v => v.TargetArea);
            return View(videos.ToList());
        }

        // GET: Videos/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Video video = db.Videos.Find(id);
            if (video == null)
            {
                return HttpNotFound();
            }
            return View(video);
        }

        // GET: Videos/Create
        public ActionResult Create()
        {
            ViewBag.GameID = new SelectList(db.Games, "GameID", "UserName");
            ViewBag.TargetAreaID = new SelectList(db.TargetAreas, "TargetAreaID", "TargetAreaName");
            return View();
        }

        // POST: Videos/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "VideoID,VideoLink,VideoName,IsWatch,IsBonus,TargetAreaID,GameID,VideoStart,VideoEnd")] Video video)
        {
            if (ModelState.IsValid)
            {
                db.Videos.Add(video);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            ViewBag.GameID = new SelectList(db.Games, "GameID", "UserName", video.GameID);
            ViewBag.TargetAreaID = new SelectList(db.TargetAreas, "TargetAreaID", "TargetAreaName", video.TargetAreaID);
            return View(video);
        }

        // GET: Videos/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Video video = db.Videos.Find(id);
            if (video == null)
            {
                return HttpNotFound();
            }
            ViewBag.GameID = new SelectList(db.Games, "GameID", "UserName", video.GameID);
            ViewBag.TargetAreaID = new SelectList(db.TargetAreas, "TargetAreaID", "TargetAreaName", video.TargetAreaID);
            return View(video);
        }

        // POST: Videos/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "VideoID,VideoLink,VideoName,IsWatch,IsBonus,TargetAreaID,GameID,VideoStart,VideoEnd")] Video video)
        {
            if (ModelState.IsValid)
            {
                db.Entry(video).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            ViewBag.GameID = new SelectList(db.Games, "GameID", "UserName", video.GameID);
            ViewBag.TargetAreaID = new SelectList(db.TargetAreas, "TargetAreaID", "TargetAreaName", video.TargetAreaID);
            return View(video);
        }

        // GET: Videos/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Video video = db.Videos.Find(id);
            if (video == null)
            {
                return HttpNotFound();
            }
            return View(video);
        }

        // POST: Videos/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            Video video = db.Videos.Find(id);
            db.Videos.Remove(video);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
